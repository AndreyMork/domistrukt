import type * as T from './Types/Types.d.ts';

/**
 * Represents metadata for an error, including optional message and cause.
 */
export type errorMeta = Record<string, any> & { message?: string; cause?: any };

/**
 * Base class for structured errors with metadata.
 */
export class ErrorStruktBase extends Error {
	override message: string;
	readonly meta: errorMeta;

	constructor(msg: string, metaInput?: errorMeta) {
		const meta = { ...metaInput };

		const message = meta.message ?? msg;

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

export type staticErrorInstance = ErrorStruktBase;

export type staticErrorClass = {
	new (meta?: errorMeta): staticErrorInstance;
	new (message: string, meta?: errorMeta): staticErrorInstance;
};

/**
 * Parameters for creating a static error.
 */
export type staticParams = {
	message?: string;
};

/**
 * Creates a static error class with optional parameters.
 * @param params - Optional parameters for the static error.
 * @returns A class for creating static error instances.
 * @example
 * // Create a static error class with a default message
 * class MyError extends staticError({ message: 'Default error message' }) {}
 *
 * // Create an instance of the error with a specific message
 * const errorInstance = new MyError('Specific error message');
 * console.log(errorInstance.message); // Output: 'Specific error message'
 *
 * // Create an instance with metadata
 * const meta = { annotation: 'test' };
 * const errorWithMeta = new MyError(meta);
 * console.log(errorWithMeta.meta); // Output: { annotation: 'test' }
 */
export const staticError = (params?: staticParams): staticErrorClass => {
	const msg = params?.message ?? '';

	class StaticStruktError extends ErrorStruktBase {
		constructor(param1?: string | errorMeta, param2?: errorMeta) {
			const meta = typeof param1 === 'string' ? param2 : param1;
			const message = typeof param1 === 'string' ? param1 : msg;
			super(message, meta);
		}
	}

	return StaticStruktError as staticErrorClass;
};

/**
 * Represents an instance of an error with data.
 */
export type errorInstance<t> = staticErrorInstance & {
	data: t;
};

export type errorClass<constructor extends anyErrConstructor> =
	T.fnParam1<constructor> extends Exclude<T.fnParam1<constructor>, undefined>
		? {
				new (
					args: T.fnParam1<constructor>,
					meta?: errorMeta,
				): errorInstance<constructorData<constructor>>;
			}
		: {
				new (
					args?: T.fnParam1<constructor>,
					meta?: errorMeta,
				): errorInstance<constructorData<constructor>>;
			};

/**
 * Extracts the data type from a constructor function.
 */
export type constructorData<fn extends anyErrConstructor> =
	ReturnType<fn>['data'];

/**
 * Represents a constructor function for errors.
 */
export type errConstructor<input, data> = (input: input) => {
	data?: data;
	message?: string;
};
export type anyErrConstructor = errConstructor<any, any>;

/**
 * Parameters for initializing an error class.
 */
export type params<constructor extends anyErrConstructor> = {
	constructor: constructor;
};

/**
 * Initializes an error class with a given constructor.
 * @param params - Parameters including the constructor function.
 * @returns A class for creating error instances.
 * @example
 * // Define a constructor function for the error
 * class MyError extends init({
 *   constructor(input: { value: number }) {
 *     return {
 *       data: { value: input.value, isEven: input.value % 2 === 0 },
 *       message: `Error with value ${input.value}`,
 *     };
 *   }
 * }) {}
 *
 * // Create an instance of the error
 * const errorInstance = new MyError({ value: 42 });
 * console.log(errorInstance.message); // Output: 'Error with value 42'
 * console.log(errorInstance.data); // Output: { value: 42, isEven: true }
 */
export const init = <constructor extends anyErrConstructor>(
	params: params<constructor>,
): errorClass<constructor> => {
	type input = Parameters<constructor>[0];
	type data = ReturnType<constructor>;

	const constructorFn: constructor = params.constructor;

	class StruktError extends ErrorStruktBase {
		readonly data: data;

		constructor(input: input, meta?: errorMeta) {
			const { data, message } = constructorFn(input);

			super(message ?? '', meta);
			this.data = data;
		}
	}

	return StruktError;
};

export const isErrorStrukt = (value: unknown): value is ErrorStruktBase =>
	value instanceof ErrorStruktBase;
