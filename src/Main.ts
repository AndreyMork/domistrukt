export {
	klass,
	selectKeys,
	createInitFn,
	createCloneFn,
	createUpdateFn,
	redefinePropsAsAccessors,
	lazy,
} from './Lib.ts';
export * as Lib from './Lib.ts';

export { init } from './Strukt.ts';
export type { config } from './Strukt.ts';
export * as Strukt from './Strukt.ts';

export { init as error, staticError } from './Error.ts';
export type { config as errorConfig, messageFn } from './Error.ts';
export * as Err from './Error.ts';

export { toFlatObject, copy, flatObject, isTrueObject } from './FlatObject.ts';
export * as FlatObject from './FlatObject.ts';

export type * as Types from './Types/Types.d.ts';
export type {
	classInputType,
	classInputType1,
	classInputTypeN,
	createFn,
} from './Types/Types.d.ts';
