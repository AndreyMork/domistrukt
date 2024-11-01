export * from './Lib.ts';
export * as Lib from './Lib.ts';

export * as Strukt from './Strukt.ts';
export { init, initBasic, isStrukt, isBasicStrukt } from './Strukt.ts';
export type { params } from './Strukt.ts';

export * as StruktBase from './StruktBase.ts';
export { StruktBase as Base, BasicStrukt as Basic } from './StruktBase.ts';

export * as Switch from './Switch.ts';
export { switchCase } from './Switch.ts';

export * as Error from './Error.ts';
export { init as error, staticError, isErrorStrukt } from './Error.ts';
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
