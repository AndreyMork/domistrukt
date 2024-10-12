// Stryker disable all

import * as Err from './Error.ts';

/**
 * Error thrown when the number of arguments is incorrect for an update.
 */
export class UpdateArgsLengthError extends Err.init({
	create(argsLen: number) {
		return {
			argsLen,
		};
	},

	message(data: { argsLen: number }) {
		return `Update is only for classes with one argument, but this class has ${data.argsLen} arguments`;
	},
}) {}
