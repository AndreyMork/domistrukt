export * from './Lib.ts';
export * as Lib from './Lib.ts';

export * as Strukt from './Strukt.ts';
export { init, StruktBase as Base } from './Strukt.ts';
export type { params } from './Strukt.ts';

export * as Error from './Error.ts';
export { init as error, staticError } from './Error.ts';
export type { params as errorParams } from './Error.ts';

export * as Errors from './Errors.ts';

export * as FlatObject from './FlatObject.ts';
export {
	toFlatObject,
	copy,
	isTrueObject,
	flatObject as initFlatObject,
	type FlatObject as flatObject,
} from './FlatObject.ts';

export type * as Types from './Types/Types.d.ts';
export type { classArgs, classArgs1, classArgsN } from './Types/Types.d.ts';
