export {
	selectKeys,
	createInitFn,
	createCloneFn,
	redefinePropsAsAccessors,
} from './Lib.ts';
export * as Lib from './Lib.ts';

export { init } from './Strukt.ts';
// export type { struktClass, config, handler } from './Strukt.ts';
export * as Strukt from './Strukt.ts';

export { init as error, staticError } from './Error.ts';
export type { config as errorConfig } from './Error.ts';
export * as Err from './Error.ts';

export type * as Types from './Types/Types.d.ts';
export type {
	klass,
	klass1,
	classInputType,
	classInputType1,
	classInputTypeN,
} from './Types/Types.d.ts';
