/**
 * Represents a class constructor type.
 * @template args - The type of the constructor arguments, defaults to any[].
 * @template instance - The type of the instance created by the constructor, defaults to any.
 */
export type klass<args extends Array<any> = Array<any>, instance = any> = new (
	...args: args
) => instance;

/**
 * Represents a class constructor type with a single input parameter.
 * @template input - The type of the single input parameter for the constructor, defaults to any.
 * @template result - The type of the instance created by the constructor, defaults to any.
 */
export type klass1<input = any, result = any> = klass<[input], result>;

/**
 * Represents the constructor parameters of a class.
 * @template t - The class type.
 */
export type classInputType<t extends klass> = ConstructorParameters<t>;

/**
 * Represents the nth constructor parameter of a class.
 * @template t - The class type.
 * @template n - The index of the constructor parameter.
 */
export type classInputTypeN<
	t extends klass,
	n extends number,
> = ConstructorParameters<t>[n];

/**
 * Represents the first constructor parameter of a class.
 * @template t - The class type.
 */
export type classInputType1<t extends klass> = classInputTypeN<t, 0>;

export type createFn<input, output> = (input: input) => output;

export type createInput<fn extends createFn<any, any>> = Parameters<fn>[0];
export type createOutput<fn extends createFn<any, any>> = ReturnType<fn>;
