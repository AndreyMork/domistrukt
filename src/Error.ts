import type * as T from './Types/Types.d.ts';

/**
 * Configuration options for creating a static error class.
 *
 * @template data - The type of the error data.
 * @property {messageParam<data>} [message] - Function or string for error message.
 *   String: static message for all instances.
 *   Function: called with error data to generate message.
 *   If omitted: empty string as default.
 *   Note: `meta.message` overrides this if provided during instantiation.
 */
export type opts<data> = {
	message?: messageParam<data>;
};

/**
 * Configuration for creating a dynamic error class.
 *
 * @template input - The type of the input data for the error.
 * @template output - The type of the error data after processing.
 * @property {messageParam<output>} [message] - Function or string for error message.
 *   String: static message for all instances.
 *   Function: called with error data to generate message.
 *   If omitted: empty string as default.
 *   Note: `meta.message` overrides this if provided during instantiation.
 * @property {T.createFn<input, output>} [create] - Function to transform input to output data.
 *   If omitted, input is used as output without transformation.
 */
export type config<input, output> = opts<output> & {
	create: T.createFn<input, output>;
};

/**
 * Metadata for error instances.
 *
 * @property {string} [message] - Optional message for the error.
 * @property {any} [cause] - Optional cause of the error.
 */
export type errorMeta = Record<string, any> & { message?: string; cause?: any };

/**
 * Function type for generating error messages.
 *
 * @template t - The type of the data used to generate the message.
 * @param {Readonly<t>} [opts] - Optional data for generating the message.
 * @returns {string} The generated message.
 */
export type messageFn<t> = t extends undefined
	? () => string
	: (opts: Readonly<t>) => string;

/**
 * Parameter type for specifying error messages.
 *
 * @template t - The type of the data used to generate the message.
 * @type {string | messageFn<t>} - A static string or a function to generate the message.
 */
export type messageParam<t> = string | messageFn<t>;

/**
 * Creates a message function from a given message parameter.
 *
 * @template t - The type of the data used to generate the message.
 * @param {messageParam<t>} message - The message parameter.
 * @returns {messageFn<t>} A function to generate the message.
 */
export const makeMessageFn = <t>(message: messageParam<t>): messageFn<t> =>
	typeof message === 'function'
		? message
		: (((): string => message) as messageFn<t>);

/**
 * Base class for structured errors.
 *
 * @extends {Error}
 * @property {string} message - The error message.
 * @property {errorMeta} meta - Additional metadata for the error.
 */
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
	new (message: string, meta?: errorMeta): staticErrorInstance;
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
 * @returns {staticErrorClass} A new error class with the specified behavior.
 *
 * @example
 * // Example 1: Using a static string message
 * class MyStaticError extends staticError({ message: 'A static error occurred' }) {}
 * throw new MyStaticError({ additionalInfo: 'Some context' });
 * // Output: Error with message "A static error occurred" and meta { additionalInfo: 'Some context' }
 *
 * @example
 * // Example 2: Using a function to generate a message
 * class MyGeneratedError extends staticError({ message: () => `Error at ${new Date().toISOString()}` }) {}
 * throw new MyGeneratedError();
 * // Output: Error with a message generated at runtime, e.g., "Error at 2023-10-05T14:48:00.000Z"
 *
 * @example
 * // Example 3: Overriding the message with meta.message
 * class MyOverriddenError extends staticError({ message: 'Default message' }) {}
 * throw new MyOverriddenError('Overridden message', { additionalInfo: 'Some context' });
 * // Output: Error with message "Overridden message" and meta { additionalInfo: 'Some context' }
 */
export const staticError = (params?: staticErrorConfig): staticErrorClass => {
	const messageFn = makeMessageFn(params?.message ?? '');

	class StaticStruktError extends StruktErrorBase {
		constructor(param1?: string | errorMeta, param2?: errorMeta) {
			const meta = typeof param1 === 'string' ? param2 : param1;
			const message = typeof param1 === 'string' ? () => param1 : messageFn;
			super(message, meta);
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
 * Initializes and returns a custom error class with configurable message and data transformation.
 *
 * @template data - The type of the error data.
 * @param {opts<data> | config<any, any>} [params] - Configuration options for the error class.
 * @returns {errorClass<any, any>} A custom error class with the specified configuration.
 *
 * @description
 * The `init` function creates a custom error class based on the provided configuration.
 * It allows for optional transformation of input data and generation of error messages.
 * The resulting error class will have a constructor that accepts input data and an optional metadata object.
 *
 * @example
 * // Example 1: Creating a simple error class without input transformation
 * class SimpleError extends init<string>({
 *   message: (data) => `Simple error occurred: ${data}`
 * }) {}
 *
 * const error = new SimpleError("Something went wrong");
 * console.log(error.message); // Output: "Simple error occurred: Something went wrong"
 *
 * @example
 * // Example 2: Creating an error class with input transformation
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
 * class ComplexError extends init({
 *   message: (data: outputData) => `Error ${data.errorCode}: ${data.errorDetails}`,
 *   create: (input: inputData) => ({
 *     errorCode: input.code,
 *     errorDetails: input.details,
 *     timestamp: new Date()
 *   })
 * }) {}
 *
 * const complexError = new ComplexError({ code: 404, details: "Not Found" });
 * console.log(complexError.message); // Output: "Error 404: Not Found"
 * console.log(complexError.data); // Output: { errorCode: 404, errorDetails: "Not Found", timestamp: [Date object] }
 */
export function error<data>(params?: opts<data>): errorClass<data, data>;
export function error<
	createFn extends T.createFn<undefined, unknown>,
	input = T.createInput<createFn>,
	output = T.createOutput<createFn>,
>(params: config<input, output>): errorClass<input, output>;

export function error<
	createFn extends T.createFn<undefined, unknown>,
	input = T.createInput<createFn>,
	output = T.createOutput<createFn>,
>(params?: Partial<config<input, output>>): errorClass<input, output> {
	const messageFn = makeMessageFn(params?.message ?? '');
	const create = params?.create ?? (idHandler as T.createFn<input, output>);
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

const idHandler = <t>(x: t): t => x;
