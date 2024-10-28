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
