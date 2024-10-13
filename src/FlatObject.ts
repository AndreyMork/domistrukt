import * as Im from 'immutable';

/**
 * Represents a list of keys used to access values in a FlatObject.
 */
export type keys = Im.List<string>;

/**
 * Represents an iterable of strings, excluding a single string.
 * Used for specifying keys in a flexible manner.
 */
export type keysLike = Exclude<Iterable<string>, string>;

/**
 * Represents the index map of a FlatObject, mapping keys to values.
 * @template t - The type of values stored in the index.
 */
export type index<t> = Im.Map<keys, t>;

export { fromObject as toFlatObject };

/**
 * Converts a nested object into a FlatObject.
 * @example
 * const flat = fromObject({ a: { b: 1 } });
 * console.log(flat.get(['a', 'b'])); // Outputs: 1
 * @param obj - The object to convert.
 * @returns A FlatObject representation of the input object.
 */
export const fromObject = <t>(obj: Record<string, any>): FlatObject<t> => {
	let index: index<t> = Im.Map();
	let objectKeys = Im.Stack(
		Object.keys(obj).map((key) =>
			// Stryker disable next-line ArrayDeclaration
			makeKeys([key]),
		),
	);

	while (!objectKeys.isEmpty()) {
		const keys = objectKeys.peek()!;
		objectKeys = objectKeys.pop();

		const value = keys.reduce((target: any, key) => target[key], obj);

		if (!isTrueObject(value)) {
			index = index.set(keys, value);
			continue;
		}

		const newKeys = Object.keys(value).map((key) => keys.push(key));

		if (newKeys.length === 0) {
			index = index.set(keys, value as t);
			continue;
		}

		objectKeys = objectKeys.pushAll(newKeys);
	}

	return flatObject(index);
};

/**
 * Creates a deep copy of an object using FlatObject.
 * @example
 * const original = { a: { b: 1 } };
 * const copyObj = copy(original);
 * console.log(copyObj); // Outputs: { a: { b: 1 } }
 * @param obj - The object to copy.
 * @returns A deep copy of the input object.
 */
export const copy = <t extends Record<string, any>>(obj: t): t =>
	fromObject(obj).toJS<t>();

/**
 * Creates a new FlatObject instance from an index map.
 * @param index - The index map for the FlatObject.
 * @returns A new FlatObject instance.
 */
export const flatObject = <t>(index?: index<t>): FlatObject<t> =>
	new FlatObject(index ?? Im.Map());

export const makeKeys = (keys: keysLike): keys => Im.List(keys);

export const isTrueObject = (x: unknown): x is object =>
	x != null && (x as any).__proto__ === Object.prototype;

export { FlatObject as t };

/**
 * Represents a flat structure of a nested object.
 */
export class FlatObject<t = any> {
	index: index<t>;

	constructor(index: index<t>) {
		this.index = index;
	}

	/**
	 * Retrieves a value from the FlatObject.
	 * @example
	 * const value = flatObject.get<number>(['a', 'b']);
	 * console.log(value); // Outputs: 1
	 * @param keys - The keys to retrieve the value for.
	 * @returns The value associated with the keys.
	 */
	get<k>(keys: keysLike): k {
		return this.index.get(makeKeys(keys)) as k;
	}

	/**
	 * Sets a value in the FlatObject and returns a new instance.
	 * @example
	 * const newFlat = flatObject.set(['a', 'b'], 2);
	 * console.log(newFlat.get(['a', 'b'])); // Outputs: 2
	 * @param keys - The keys to set the value for.
	 * @param value - The value to set.
	 * @returns A new FlatObject with the updated value.
	 */
	set(keys: keysLike, value: t) {
		const index = this.index.set(makeKeys(keys), value);
		return flatObject(index);
	}

	/**
	 * Sets a value in the FlatObject in place.
	 * @example
	 * flatObject.setMut(['a', 'b'], 2);
	 * console.log(flatObject.get(['a', 'b'])); // Outputs: 2
	 * @param keys - The keys to set the value for.
	 * @param value - The value to set.
	 * @returns The current FlatObject instance.
	 */
	setMut(keys: keysLike, value: t) {
		this.index = this.index.set(makeKeys(keys), value);
		return this;
	}

	/**
	 * Checks if the FlatObject contains the specified keys.
	 * @example
	 * const exists = flatObject.has(['a', 'b']);
	 * console.log(exists); // Outputs: true or false
	 * @param keys - The keys to check for.
	 * @returns `true` if the keys exist, `false` otherwise.
	 */
	has(keys: keysLike): boolean {
		return this.index.has(makeKeys(keys));
	}

	/**
	 * Converts the FlatObject back to a regular JavaScript object.
	 * @example
	 * const obj = flatObject.toJS();
	 * console.log(obj); // Outputs: { a: { b: 1 } }
	 * @returns A JavaScript object representation of the FlatObject.
	 * @template r - The type of the resulting JavaScript object.
	 */
	toJS<r>(): r {
		const result = {};
		this.entries().forEach((property) => {
			let target: any = result;

			property.keys.butLast().forEach((key) => {
				if (!(key in target)) {
					target[key] = {};
				}

				target = target[key];
			});

			const lastKey = property.keys.last();
			if (lastKey != null) {
				target[lastKey] = property.value;
			}
		});

		return result as r;
	}

	/**
	 * Transforms the FlatObject using a provided function.
	 * @example
	 * const transformed = flatObject.transform(index => index.map(value => value * 2));
	 * @param fn - The function to transform the index.
	 * @returns A new FlatObject with the transformed index.
	 */
	transform<r>(fn: (index: index<t>) => index<r>): FlatObject<r> {
		const newIndex = fn(this.index);
		return flatObject(newIndex);
	}

	/**
	 * Maps each value in the FlatObject to a new value.
	 * @example
	 * const mapped = flatObject.map<number>((value, keys) => value * 2);
	 * @param fn - The function to map each value.
	 * @returns A new FlatObject with mapped values.
	 */
	map<r>(fn: (value: t, keys: keys) => r): FlatObject<r> {
		return this.transform((index) => index.map(fn));
	}

	/**
	 * Filters the FlatObject based on a predicate function.
	 * @example
	 * const filtered = flatObject.filter((value, keys) => value > 1);
	 * console.log(filtered.toJS()); // Outputs only properties with values greater than 1
	 * @param fn - The predicate function to filter values. It receives the value and keys as arguments.
	 * @returns A new FlatObject with filtered values.
	 */
	filter(fn: (value: t, keys: keys) => boolean): FlatObject<t> {
		return this.transform((index) => index.filter(fn));
	}

	/**
	 * Merges another FlatObject into this one.
	 * @example
	 * const merged = flatObject.merge(otherFlatObject);
	 * @param other - The other FlatObject to merge.
	 * @returns A new FlatObject with merged values.
	 */
	merge<r>(other: FlatObject<r>): FlatObject<t | r> {
		return this.transform((index) => index.merge(other.index));
	}

	keys(): Im.List<keys> {
		return this.index.keySeq().toList();
	}

	values(): Im.List<t> {
		return this.index.valueSeq().toList();
	}

	entries(): Im.List<{ keys: keys; value: t }> {
		return this.index
			.entrySeq()
			.map(([keys, value]) => ({
				value,
				keys,
			}))
			.toList();
	}

	get size(): number {
		return this.index.size;
	}

	isEmpty(): boolean {
		return this.index.isEmpty();
	}

	isNotEmpty(): boolean {
		return !this.isEmpty();
	}
}
