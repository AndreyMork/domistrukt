import { expect } from '@japa/expect';
import { expectTypeOf } from '@japa/expect-type';
// import { fileSystem } from '@japa/file-system';
import * as Japa from '@japa/runner';

Japa.processCLIArgs(process.argv.slice(2));

Japa.configure({
	files: ['tests/**/*.test.(ts|js)'],
	plugins: [
		//
		// fileSystem(),
		expect(),
		expectTypeOf(),
	],
});

Japa.run();
