import type * as T from './Types/Types.d.ts';

export const klass = <t>(): T.klass<[], t> => class {} as any;

/**
 * Selects specified keys from a target object in a type-safe manner.
 *
 * @template t - The type of the target object.
 * @template k - The type of the keys to select, extending keyof t.
 * @param {t} target - The target object to select keys from.
 * @param {Iterable<k>} keys - An iterable of keys to select.
 * @returns {{ [key in k]: t[key] }} An object with the selected keys and their values.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = selectKeys(obj, ['a', 'c'] as const);
 * console.log(result); // Output: { a: 1, c: 3 }
 *
 * @example
 * class Person {
 *   constructor(public name: string, public age: number, private ssn: string) {}
 *   toObject() {
 *     return selectKeys(this, ['name', 'age'] as const);
 *   }
 * }
 * const person = new Person('John', 30, '123-45-6789');
 * const result = person.toObject();
 * console.log(result); // Output: { name: 'John', age: 30 }
 */
export const selectKeys = <t, key extends keyof t = keyof t>(
	target: t,
	keys: Iterable<key>,
): { [k in key]: t[k] } => {
	const result: any = {};

	for (const key of keys) {
		result[key] = target[key];
	}

	return result;
};

/**
 * Creates a function that initializes an instance of a given class.
 *
 * @template k - The type of the class constructor.
 * @param {k} klass - The class constructor to create an initializer for.
 * @returns {(...params: ConstructorParameters<k>) => InstanceType<k>} A function that takes constructor parameters and returns a new instance of the class.
 *
 * @example
 * class Person {
 *   constructor(public name: string, public age: number) {}
 * }
 *
 * const initPerson = createInit(Person);
 * const john = initPerson('John', 30);
 * console.log(john); // Person { name: 'John', age: 30 }
 */
export const createInitFn =
	<k extends T.klass>(klass: k) =>
	(...params: ConstructorParameters<k>): InstanceType<k> =>
		Reflect.construct(klass, params);

/**
 * Creates a function that updates an instance of a given class with optional property overrides.
 * This function works with classes that have a single parameter constructor.
 *
 * @template k - The type of the class constructor.
 * @param {k} klass - The class constructor to create an update function for.
 * @returns {(target: InstanceType<k>, patch: Partial<T.classInputType1<k>>) => InstanceType<k>} A function that takes an existing instance and a partial update object, and returns a new instance of the class with updated properties.
 *
 * @example
 * class Person {
 *   constructor(public data: { name: string; age: number }) {}
 * }
 *
 * const updatePerson = createUpdateFn(Person);
 * const john = new Person({ name: 'John', age: 30 });
 * const olderJohn = updatePerson(john, { age: 31 });
 * console.log(olderJohn); // Person { data: { name: 'John', age: 31 } }
 */
export const createUpdateFn =
	<k extends T.klass1>(klass: k) =>
	(
		target: InstanceType<k>,
		patch: Partial<T.classInputType1<k>>,
	): InstanceType<k> => {
		const args = { ...target, ...patch };
		return Reflect.construct(klass, [args]);
	};

/**
 * Creates a function that clones an instance of a given class.
 * This function works with classes that have a single parameter constructor.
 *
 * @template k - The type of the class constructor.
 * @param {k} klass - The class constructor to create a clone function for.
 * @returns {(target: InstanceType<k>) => InstanceType<k>} A function that takes an existing instance and returns a new instance of the class with the same properties.
 *
 * @example
 * class Person {
 *   constructor(public data: { name: string; age: number }) {}
 * }
 *
 * const clonePerson = createCloneFn(Person);
 * const john = new Person({ name: 'John', age: 30 });
 * const johnClone = clonePerson(john);
 * console.log(johnClone); // Person { data: { name: 'John', age: 30 } }
 * console.log(john === johnClone); // false
 */
export const createCloneFn =
	<k extends T.klass1>(klass: k) =>
	(target: InstanceType<k>): InstanceType<k> => {
		const args = { ...target };
		return Reflect.construct(klass, [args]);
	};

/**
 * Mutates an object by hiding specified properties, making them non-enumerable.
 * This function modifies the original object and does not return a new one.
 * The hidden properties will not appear in console.log or when enumerating object keys,
 * but they remain accessible and mutable.
 *
 * @template t - The type of the target object.
 * @template key - The type of the keys to be hidden, must be a subset of keyof t.
 * @param {t} target - The object whose properties are to be hidden.
 * @param {Iterable<key>} props - An iterable of property names to be hidden.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * hidePropsMut(obj, ['a', 'b']);
 * console.log(obj); // Outputs: { c: 3 }
 * console.log(obj.a); // Still outputs 1, but 'a' is not visible in console.log(obj)
 * obj.a = 4; // This will change the value of 'a'
 * console.log(obj.a); // Outputs 4
 */

const defineGetter = <t>(target: t, key: keyof t, value: any) => {
	Object.defineProperty(target, key, {
		get() {
			return value;
		},
	});
};

/**
 * @unstable
 * @experimental
 * Redefines specified properties of an object as accessors (getters and setters).
 * This function mutates the original object and returns it.
 * The redefined properties will behave like normal properties when accessed or modified,
 * but they will be implemented as getters and setters internally.
 * This is useful for hiding properties from console.log, as they will be printed as [Getter/Setter].
 *
 * @template t - The type of the target object.
 * @template key - The type of the keys to be redefined, must be a subset of keyof t.
 * @param {t} target - The object whose properties are to be redefined.
 * @param {Iterable<key>} props - An iterable of property names to be redefined as accessors.
 * @returns {t} The modified target object.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * redefinePropsAsAccessors(obj, ['a', 'b']);
 * console.log(obj); // Outputs: { a: [Getter/Setter], b: [Getter/Setter], c: 3 }
 * obj.a = 4;
 * console.log(obj.a); // Outputs: 4
 * console.log(Object.getOwnPropertyDescriptor(obj, 'a')); // Shows getter and setter
 */
export const redefinePropsAsAccessors = <t, key extends keyof t>(
	target: t,
	props: Iterable<key>,
) => {
	for (const key of props) {
		const value = target[key];
		defineGetter(target, key, value);

		Object.defineProperty(target, key, {
			set(newValue) {
				defineGetter(target, key, newValue);
			},
		});
	}

	return target;
};
