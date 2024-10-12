import type * as T from './Types/Types.d.ts';

/**
 * Creates a class constructor type with no arguments.
 * @template t - The type of the instance created by the constructor.
 * @returns {T.klass<[], t>} A class constructor type.
 */
export const klass = <t>(): T.klass<[], t> => class {} as any;

/**
 * Selects specified keys from a target object in a type-safe manner.
 *
 * @template t - The type of the target object.
 * @template key - The type of the keys to select, extending keyof t.
 * @param {t} target - The target object to select keys from.
 * @param {Iterable<key>} keys - An iterable of keys to select.
 * @returns {{ [key in key]: t[key] }} An object with the selected keys and their values.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = selectKeys(obj, ['a', 'c']);
 * console.log(result); // Output: { a: 1, c: 3 }
 *
 * @example
 * class Person {
 *   constructor(public name: string, public age: number, private ssn: string) {}
 *   toObject() {
 *     return selectKeys(this, ['name', 'age']);
 *   }
 * }
 * const person = new Person('John', 30, '123-45-6789');
 * const result = person.toObject();
 * console.log(result); // Output: { name: 'John', age: 30 }
 */
export const selectKeys = <t, key extends keyof t = keyof t>(
	target: t,
	keys: Exclude<Iterable<key>, string>,
): { -readonly [k in key]: t[k] } => {
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
 * const initPerson = makeConstructor(Person);
 * const john = initPerson('John', 30);
 * console.log(john); // Person { name: 'John', age: 30 }
 */
export const makeConstructor =
	<k extends T.klass>(klass: k) =>
	(...params: ConstructorParameters<k>): InstanceType<k> =>
		Reflect.construct(klass, params);

const defineGetter = <t>(target: t, key: keyof t, value: any) => {
	Object.defineProperty(target, key, {
		get() {
			return value;
		},
	});
};

/**
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
 * redefineAsAccessors(obj, ['a', 'b']);
 * console.log(obj); // Outputs: { a: [Getter/Setter], b: [Getter/Setter], c: 3 }
 * obj.a = 4;
 * console.log(obj.a); // Outputs: 4
 * console.log(Object.getOwnPropertyDescriptor(obj, 'a')); // Shows getter and setter
 */
export const redefineAsAccessors = <t, key extends keyof t>(
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

/**
 * Options for the lazy decorator.
 * @typedef {Object} lazyOpts
 * @property {boolean} [useValue=true] - Whether to use a value property instead of a getter/setter.
 * @property {boolean} [configurable=true] - Whether the property is configurable.
 * @property {boolean} [enumerable=true] - Whether the property is enumerable.
 * @property {boolean} [writable=true] - Whether the property is writable.
 */
export type lazyOpts = {
	useValue?: boolean;
	configurable?: boolean;
	enumerable?: boolean;
	writable?: boolean;
};

/**
 * A decorator that lazily initializes a property.
 * @param {lazyOpts} [opts] - Options for the lazy initialization.
 * @returns {PropertyDecorator} A property decorator function.
 *
 * @example
 * class Example {
 *   @lazy()
 *   get expensiveValue() {
 *     console.log('Calculating...');
 *     return 42;
 *   }
 * }
 *
 * const instance = new Example();
 * console.log(instance.expensiveValue); // Logs "Calculating..." then "42"
 * console.log(instance.expensiveValue); // Logs "42" without recalculating
 */
export const lazy = (opts?: lazyOpts) => {
	const {
		useValue = true,
		configurable = true,
		writable = true,
		enumerable = useValue,
	} = opts ?? {};

	return (
		_target: any,
		propertyKey: PropertyKey,
		descriptor: PropertyDescriptor,
	) => {
		if (descriptor.get == null) {
			return;
		}

		const fn = descriptor.get;

		descriptor.get = function lazy() {
			let value = fn.call(this);

			const property = useValue
				? {
						value,
						writable,
						enumerable,
						configurable,
					}
				: {
						get() {
							return value;
						},
						set(newValue: any) {
							value = newValue;
						},
						configurable,
						enumerable,
					};

			Object.defineProperty(this, propertyKey, property);

			return value;
		};
	};
};
