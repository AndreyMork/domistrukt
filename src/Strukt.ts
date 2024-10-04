import * as Lib from './Lib.ts';
import type * as T from './Types/Types.d.ts';

/**
 * Configuration options for initializing a structured class.
 *
 * @template input - The type of the input data.
 * @template output - The type of the resulting instance.
 *
 * @property {T.createFn<input, output>} [create] - Function to transform input to output.
 * @property {(keyof output)[]} [asAccessor] - Array of keys to be defined as accessors.
 */

export type config<input, output> = {
	create?: T.createFn<input, output>;
	asAccessor?: (keyof output)[];
};

export type struktClass<input, output> = [input] extends [
	Exclude<input, undefined>,
]
	? {
			new (input: input): output;
		}
	: {
			new (input?: input): output;
		};

export type configWithoutHandler<input, output> = Omit<
	config<input, output>,
	'create'
>;
export type configWithHandler<input, output> = configWithoutHandler<
	input,
	output
> & {
	create: T.createFn<input, output>;
};

const idHandler = <t>(x: t): t => x;

/**
 * Initializes a structured class with the specified configuration.
 *
 * @template output - The type of the resulting instance.
 * @template input - The type of the input data (defaults to `output` if not specified).
 *
 * @param {config<input, output>} [params] - Configuration options for initialization.
 * @param {T.createFn<input, output>} [params.create] - Function to transform input to output.
 * @param {(keyof output)[]} [params.asAccessor] - Array of keys to be defined as accessors.
 *
 * @returns {struktClass<input, output>} - A class constructor that creates instances of type `output` from input of type `input`.
 *
 * @warning Extra properties in the input are not stripped and will be included in the resulting instance.
 *
 * @example
 * // Example 1: Basic usage
 * type data = {
 *   valueString: string;
 *   valueNumber: number;
 *   valueBoolean: boolean;
 * };
 *
 * class TestClass extends Strukt.init<data>() {}
 * const instance = new TestClass({
 *   valueString: '1',
 *   valueNumber: 1,
 *   valueBoolean: true,
 * });
 * console.log(instance);
 *
 * @example
 * // Example 2: Using custom create function
 * class TestClassWithCreate extends Strukt.init<data>({
 *   create: (input) => ({ ...input, valueNumber: input.valueNumber + 1 }),
 * }) {}
 * const instanceWithCreate = new TestClassWithCreate({
 *   valueString: '1',
 *   valueNumber: 1,
 *   valueBoolean: true,
 * });
 * console.log(instanceWithCreate);
 *
 * @example
 * // Example 3: Different input and output types
 * class TestClassDifferentTypes extends Strukt.init({
 *   create: (input: number): data => ({
 *     valueNumber: input,
 *     valueString: '1',
 *     valueBoolean: true,
 *   }),
 * }) {}
 * const instanceDifferentTypes = new TestClassDifferentTypes(1);
 * console.log(instanceDifferentTypes);
 */

export function init<output>(
	params?: configWithoutHandler<output, output>,
): struktClass<output, output>;
export function init<output, input = output>(
	params: configWithHandler<input, output>,
): struktClass<input, output>;

export function init<output, input>(
	params?: config<input, output>,
): struktClass<input, output> {
	const createFn = params?.create ?? (idHandler as T.createFn<input, output>);

	const asAccessor = params?.asAccessor ?? [];
	class Strukt {
		constructor(input: Readonly<input>) {
			const data = createFn(input);
			Object.assign(this, data);
			Lib.redefinePropsAsAccessors(this as unknown as output, asAccessor);
		}
	}

	return Strukt as struktClass<input, output>;
}
