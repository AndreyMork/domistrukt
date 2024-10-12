/**
 * Represents a class constructor type.
 * @template args - An array of types representing the constructor arguments. Defaults to any[].
 * @template instance - The type of the instance created by the constructor. Defaults to any.
 */
export type klass<args extends Array<any> = Array<any>, instance = any> = new (
	...args: args
) => instance;

/**
 * Represents a class constructor type with a single input parameter.
 * @template input - The type of the single input parameter for the constructor. Defaults to any.
 * @template result - The type of the instance created by the constructor. Defaults to any.
 */
export type klass1<input = any, result = any> = klass<[input], result>;

/**
 * Extracts the constructor parameters of a class type.
 * @template t - The class constructor type.
 */
export type classArgs<t extends klass> = ConstructorParameters<t>;

/**
 * Extracts the nth constructor parameter of a class type.
 * @template t - The class constructor type.
 * @template n - The index of the constructor parameter to extract.
 */
export type classArgsN<
	t extends klass,
	n extends number,
> = ConstructorParameters<t>[n];

/**
 * Extracts the first constructor parameter of a class type.
 * @template t - The class constructor type.
 */
export type classArgs1<t extends klass> = classArgsN<t, 0>;

/**
 * Represents a generic constructor function type.
 * @type {(...args: any[]) => any}
 */
export type anyConstructor = (...args: any[]) => any;
export type anyConstructor1 = (arg: any) => any;

export type fnParam1<fn extends anyConstructor> = Parameters<fn>[0];
