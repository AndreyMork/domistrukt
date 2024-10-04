import type * as T from './Types/Types.d.ts';

export type errorMeta = Record<string, any> & { message?: string; cause?: any };

export type messageFn<t> = t extends undefined
	? () => string
	: (opts: Readonly<t>) => string;
export type messageParam<t> = string | messageFn<t>;

export const makeMessageFn = <t>(message: messageParam<t>): messageFn<t> =>
	typeof message === 'function'
		? message
		: (((): string => message) as messageFn<t>);

export class StruktErrorBase extends Error {
	override message: string;
	readonly meta: errorMeta;

	constructor(messageFn: messageFn<undefined>, metaInput?: errorMeta) {
		const meta = { ...metaInput };

		const message = meta.message ?? messageFn();
		super(message, meta.cause == null ? undefined : { cause: meta.cause });
		this.message = message;
		this.name = this.constructor.name;

		// biome-ignore lint/performance/noDelete: <explanation>
		delete meta.cause;
		// biome-ignore lint/performance/noDelete: <explanation>
		delete meta.message;
		this.meta = meta;
	}
}

export type staticErrorInstance = StruktErrorBase;

export type staticErrorClass = {
	new (meta?: errorMeta): staticErrorInstance;
};

/**
 * Configuration for creating a static error class.
 *
 * @property {messageParam<undefined>} [message] - Function or string for error message.
 *   String: static message for all instances.
 *   Function: called without args to generate message.
 *   If omitted: empty string as default.
 *   Note: `meta.message` overrides this if provided during instantiation.
 *
 * Used with `staticError` function to create custom error classes with predefined messages.
 */
export type staticErrorConfig = {
	message?: messageParam<undefined>;
};

/**
 * Creates a static error class with a predefined message.
 *
 * @param {staticErrorConfig} [params] - Configuration for the static error.
 * @param {messageParam<undefined>} [params.message] - The error message or a function to generate it.
 * @returns {staticErrorClass} A new error class with the specified behavior.
 *
 * @example
 * class MyCustomError extends StaticError({ message: 'A static error occurred' }) {}
 * throw new MyCustomError({ additionalInfo: 'Some context' });
 *
 * @example
 * class MyCustomError extends StaticError({ message: () => `Error at ${new Date().toISOString()}` }) {}
 * throw new MyCustomError();
 */

export const staticError = (params?: staticErrorConfig): staticErrorClass => {
	const messageFn = makeMessageFn(params?.message ?? '');

	class StaticStruktError extends StruktErrorBase {
		constructor(meta?: errorMeta) {
			super(messageFn, meta);
		}
	}

	return StaticStruktError as staticErrorClass;
};

export type errorInstance<t> = staticErrorInstance & {
	data: t;
};

export type errorClass<input, output> = [input] extends [
	Exclude<input, undefined>,
]
	? {
			new (data: input, meta?: errorMeta): errorInstance<output>;
		}
	: {
			new (data?: input, meta?: errorMeta): errorInstance<output>;
		};

/**
 * Configuration for creating a dynamic error class.
 *
 * @template output - The type of the error data.
 * @template input - The type of the input data for the error.
 * @property {messageParam<output>} [message] - Function or string for error message.
 *   String: static message for all instances.
 *   Function: called with error data to generate message.
 *   If omitted: empty string as default.
 *   Note: `meta.message` overrides this if provided during instantiation.
 * @property {create<input, output>} [create] - Function to transform input to output data.
 *   If omitted, input is used as output without transformation.
 *
 * Used with `init` function to create custom error classes with dynamic messages.
 */
export type config<input, output> = {
	message?: messageParam<output>;
	create?: T.createFn<input, output>;
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

export const idHandler = <t>(x: t): t => x;

/**
 * Initializes and returns a custom error class.
 *
 * @template output - The type of the error data after processing.
 * @template input - The type of the input data for the error.
 * @param {config<output, input>} [params] - Configuration options for the error class.
 * @param {messageParam<output>} [params.message] - Function or string for error message.
 * @param {create<input, output>} [params.create] - Function to transform input to output data.
 * @returns {errorClass<output, input>} A custom error class with the specified configuration.
 *
 * @description
 * This function creates a custom error class based on the provided configuration.
 * It can be called with or without a handler function (create) to transform the input.
 * The resulting error class will have a constructor that accepts input data and an optional metadata object.
 *
 * @example
 * // Creating a simple error class without input transformation
 * const SimpleError = init<string>({
 *   message: (data) => `Simple error occurred: ${data}`
 * });
 *
 * const error = new SimpleError("Something went wrong");
 * console.log(error.message); // Output: "Simple error occurred: Something went wrong"
 *
 * @example
 * // Creating an error class with input transformation
 * type inputData = {
 *   code: number;
 *   details: string;
 * };
 *
 * type outputData = {
 *   errorCode: number;
 *   errorDetails: string;
 *   timestamp: Date;
 * };
 *
 * class ComplexError extends init<outputData, inputData>({
 *   message: (data) => `Error ${data.errorCode}: ${data.errorDetails}`,
 *   create: (input) => ({
 *     errorCode: input.code,
 *     errorDetails: input.details,
 *     timestamp: new Date()
 *   })
 * });
 *
 * const complexError = new ComplexError({ code: 404, details: "Not Found" });
 * console.log(complexError.message); // Output: "Error 404: Not Found"
 * console.log(complexError.data); // Output: { errorCode: 404, errorDetails: "Not Found", timestamp: [Date object] }
 */
export function init<output>(
	params?: configWithoutHandler<output, output>,
): errorClass<output, output>;
export function init<output, input>(
	params: configWithHandler<input, output>,
): errorClass<input, output>;

export function init<output, input>(
	params?: config<input, output>,
): errorClass<input, output> {
	const create = params?.create ?? (idHandler as T.createFn<input, output>);
	const messageFn = makeMessageFn(params?.message ?? '');

	class StruktError extends StruktErrorBase {
		readonly data: output;

		constructor(input: input, meta?: errorMeta) {
			const data = create(input);

			super(() => messageFn(data), meta);
			this.data = data;
		}
	}

	return StruktError as errorClass<input, output>;
}
