// Stryker disable all

import * as Err from './Error.ts';

export class SwitchNoMatch extends Err.init({
	constructor(value: any) {
		return {
			data: { value },
			message: `No match found and no default provided for ${value}`,
		};
	},
}) {}

export class CannotRunUnsavedCompileSwitch extends Err.init({
	constructor() {
		return {
			message: 'Cannot run unsaved CompileSwitch',
		};
	},
}) {}
