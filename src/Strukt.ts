import * as Lib from './Lib.ts';
import type * as T from './Types/Types.d.ts';

/**
 * Configuration options for initializing a structured class.
 *
 * @template input - The type of the input data.
 * @template output - The type of the resulting instance.
 *
 * @property {(keyof output)[]} [asAccessor] - Array of keys to be defined as accessors.
 * @property {boolean} [checkPrototype] - Whether to check the prototype chain for existing properties.
 */
export type opts<data> = {
	asAccessor?: (keyof data)[];
	checkPrototype?: boolean;
};

/**
 * Configuration options for creating a structured class.
 *
 * @template input - The type of the input data.
 * @template output - The type of the resulting instance.
 *
 * @property {T.createFn<input, output>} create - Function to transform input to output.
 * @property {(keyof output)[]} [asAccessor] - Array of keys to be defined as accessors.
 * @property {boolean} [checkPrototype] - Whether to check the prototype chain for existing properties.
 */
export type config<input, output> = {
	create: T.createFn<input, output>;
} & opts<output>;

export type struktClass<input, output> = [input] extends [
	Exclude<input, undefined>,
]
	? {
			new (input: input): output;
		}
	: {
			new (input?: input): output;
		};

const idHandler = <t>(x: t): t => x;
const defaults = {
	checkPrototype: false,
};

/**
 * Initializes a structured class with the specified configuration.
 *
 * @template data - The type of the input and output data.
 * @param {opts<data>} [params] - Configuration options for initialization.
 * @returns {struktClass<data, data>} - A class constructor that creates instances of type `data`.
 *
 * @example
 * // Basic usage with default configuration
 * type data = { value: string };
 * class MyClass extends Strukt.init<data>() {}
 * const instance = new MyClass({ value: 'example' });
 * console.log(instance.value); // Output: 'example'
 */
export function init<data>(params?: opts<data>): struktClass<data, data>;

/**
 * Initializes a structured class with the specified configuration.
 *
 * @template createFn - The type of the create function.
 * @template input - The type of the input data.
 * @template output - The type of the resulting instance.
 * @param {config<input, output>} params - Configuration options for initialization.
 * @returns {struktClass<input, output>} - A class constructor that creates instances of type `output` from input of type `input`.
 *
 * @example
 * // Using a custom create function to transform input
 * // Note: Specify types directly in the create function, not as generics on init.
 * type input = { value: number };
 * type output = { value: string };
 * class MyClass extends Strukt.init({
 *   create: (input: input): output => ({ value: input.value.toString() }),
 * }) {}
 * const instance = new MyClass({ value: 123 });
 * console.log(instance.value); // Output: '123'
 */
export function init<
	createFn extends T.createFn<undefined, unknown>,
	input = T.createInput<createFn>,
	output = T.createOutput<createFn>,
>(params: config<input, output>): struktClass<input, output>;

export function init<
	createFn extends T.createFn<undefined, unknown>,
	input = T.createInput<createFn>,
	output = T.createOutput<createFn>,
>(params?: Partial<config<input, output>>): struktClass<input, output> {
	const createFn = params?.create ?? (idHandler as T.createFn<input, output>);
	const { checkPrototype = defaults.checkPrototype } = params ?? {};

	const asAccessor = params?.asAccessor ?? [];
	class Strukt {
		constructor(input: Readonly<input>) {
			const data = createFn(input);

			if (!checkPrototype) {
				Object.assign(this, data);
			} else {
				// @ts-expect-error
				const proto: Record<string, any> = this.__proto__;

				for (const key in data) {
					if (!Object.hasOwn(proto, key)) {
						Reflect.set(this, key, data[key]);
					}
				}
			}

			Lib.redefinePropsAsAccessors(this as unknown as output, asAccessor);
		}
	}

	return Strukt as struktClass<input, output>;
}
