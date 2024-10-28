// import * as Lib from './Lib.ts';
import * as StruktBase from './StruktBase.ts';
import type * as T from './Types/Types.d.ts';

/**
 * Parameters for initializing a Strukt.
 * @template constructor - The constructor type.
 * @property {constructor} constructor - The constructor function.
 * @property {(keyof ReturnType<constructor>)[]} [hidden] - Optional keys to be hidden.
 */
export type params<constructor extends T.anyConstructor> = {
	constructor: constructor;
	hidden?: (keyof ReturnType<constructor>)[];
};

export type struktClass<constructor extends T.anyConstructor> = {
	new (
		...params: Parameters<constructor>
	): StruktBase.t<Parameters<constructor>, ReturnType<constructor>> &
		ReturnType<constructor>;
};

// export const defaults = {};

/**
 * Initializes a Strukt class.
 * @template constructor - The constructor type.
 * @param {params<constructor>} params - The parameters for initialization.
 * @returns {struktClass<constructor>} The initialized Strukt class.
 * @example
 * class MyClass extends init({
 *   constructor (args: { x: number, y: number }) {
 *     return {
 *       x: args.x,
 *       y: args.y,
 *       sum: args.x + args.y
 *     };
 *   },
 *   hidden: ['sum']
 * }) {}
 * const instance = new MyClass({ x: 1, y: 2 });
 * console.log(instance); // Output: MyClass { x: 1, y: 2, sum: 3 }
 */
export const init = <constructor extends T.anyConstructor>(
	params: params<constructor>,
): struktClass<constructor> => {
	type args = Parameters<constructor>;
	type output = ReturnType<constructor>;

	const constructorFn: constructor = params.constructor;
	const hidden = params.hidden ?? [];

	class Strukt extends StruktBase.t<args, output> {
		constructor(...args: args) {
			const data = constructorFn(...args) as output;
			super({ data, hidden });
		}
	}

	return Strukt as struktClass<constructor>;
};
