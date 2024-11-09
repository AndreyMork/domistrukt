import * as Im from 'immutable';

import * as Err from './Error.ts';
// import * as Lib from './Lib.ts';
// import * as Strukt from './Strukt.ts';
import type * as T from './Types/Types.d.ts';

export type callbackFn<data, result> = (
	value: data,
	ctx: SwitchContext,
) => result;
export type predicateFn<data> = (value: data, ctx: SwitchContext) => boolean;

export type errorCallback<t> = (params: {
	target: t;
	ctx: SwitchContext;
	cause: Error;
}) => Error;

// TODO tests
// TODO tsdocs
// TODO instance structural exclude warning
// TODO as const warning

export type typeofName = 'string' | 'number' | 'boolean' | 'symbol' | 'bigint';

export type dispatcher = {
	test: predicateFn<any>;
	callback: callbackFn<any, any>;
};

export type params<target, result> = {
	target?: target;
	ctxData?: any;
	dispatchers?: Im.List<dispatcher>;
	mapper?: callbackFn<result, any>;
};

export const continueSymbol: unique symbol = Symbol('switch/continue');

// TODO figure out typing
export class SwitchContext {
	data: any;
	target: any;

	constructor(params: { data: any; target: any }) {
		this.target = params.target;
		this.data = params.data ?? {};
	}

	// 	setData(data: any) {
	// 		this.data = data;
	// 		return this;
	// 	}
	//
	// 	setTarget(target: any) {
	// 		this.target = target;
	// 		return this;
	// 	}

	continue<t>(): t {
		return continueSymbol as unknown as t;
	}
}

export { Switch, Switch as t };
/**
 * A class that allows for conditional execution of callbacks based on various criteria.
 * @template data - The type of data being tested.
 * @template result - The type of result returned by the callbacks.
 * @template notChecked - The type of data that has not been checked.
 */
class Switch<target, result = never, notChecked = target> {
	target?: target;
	#dispatchers: Im.List<dispatcher>;
	#mapper?: callbackFn<result, any>;

	constructor(params?: params<target, result>) {
		this.target = params?.target;
		this.#dispatchers = Im.List(params?.dispatchers);
		this.#mapper = params?.mapper;
	}

	clone() {
		return this.#update();
	}

	#update(params?: Partial<params<target, result>>) {
		return new Switch({
			target: params?.target ?? this.target,
			dispatchers: params?.dispatchers ?? this.#dispatchers,
			mapper: params?.mapper ?? this.#mapper,
		});
	}

	#reset() {
		return this.#update({ target: undefined });
	}

	save() {
		const saved = this.#reset();
		return (data: target, ctxData?: any): result => saved.run(data, ctxData);
	}

	run(target?: target, ctxData?: any): result {
		if (target == null) {
			return this.run(this.target, ctxData);
		}

		const ctx = new SwitchContext({
			data: ctxData,
			target,
		});

		for (const dispatcher of this.#dispatchers) {
			if (!dispatcher.test(target, ctx)) {
				continue;
			}

			const result = dispatcher.callback(target, ctx);

			if (result === continueSymbol) {
				continue;
			}

			if (this.#mapper != null) {
				return this.#mapper(result, ctx);
			}

			return result;
		}

		throw new SwitchNoMatch(target);
	}

	verify(
		..._notChecked: T.isNever<notChecked> extends true
			? []
			: [never, 'Not all cases are checked:', notChecked]
	): this {
		return this;
	}

	saveStrict(
		..._notChecked: T.isNever<notChecked> extends true
			? []
			: [never, 'Not all cases are checked:', notChecked]
	) {
		return this.save();
	}

	runStrict(
		..._notChecked: T.isNever<notChecked> extends true
			? []
			: [never, 'Not all cases are checked:', notChecked]
	) {
		return this.run();
	}

	#dispatch<t extends Switch<any, any, any>>(dispatcher: dispatcher): t {
		return this.#update({
			dispatchers: this.#dispatchers.push(dispatcher),
		}) as t;
	}

	when<checked = never, res = result>(
		test: boolean | predicateFn<target>,
		callback: callbackFn<
			T.isNever<checked> extends true ? target : checked,
			res
		>,
	): Switch<target, result | res, Exclude<notChecked, checked>> {
		if (typeof test === 'boolean') {
			return this.#dispatch({
				test: () => test,
				callback,
			});
		}

		return this.#dispatch({
			test,
			callback,
		});
	}

	otherwise<res>(
		callback: callbackFn<notChecked, res>,
	): Switch<target, result | res, never> {
		return this.#dispatch({
			test: () => true,
			callback,
		});
	}

	otherwiseThrow(error?: Error | errorCallback<notChecked>) {
		if (error == null) {
			return this.otherwise(() => {
				throw new SwitchNoMatch(this.target);
			});
		}

		if (error instanceof Error) {
			return this.otherwise(() => {
				throw error;
			});
		}

		return this.otherwise((target, ctx) => {
			const cause = new SwitchNoMatch(this.target);
			throw error({ target, ctx, cause });
		});
	}

	whenValue<val extends notChecked[], res>(
		value: val,
		callback: callbackFn<val[number], res>,
	): Switch<target, result | res, Exclude<notChecked, val[number]>>;
	whenValue<val extends notChecked, res>(
		value: val,
		callback: callbackFn<val, res>,
	): Switch<target, result | res, Exclude<notChecked, val>>;
	whenValue(value: unknown, callback: callbackFn<unknown, unknown>) {
		if (!Array.isArray(value)) {
			return this.#dispatch({
				test: (x) => x === value,
				callback,
			});
		}

		const set = Im.Set(value);
		return this.#dispatch({
			test: (x) => set.has(x),
			callback,
		});
	}

	whenInstance<k extends T.anyClass, res>(
		klass: k,
		callback: callbackFn<InstanceType<k>, res>,
	): Switch<target, result | res, Exclude<notChecked, InstanceType<k>>>;
	whenInstance<k extends T.anyClass[], res>(
		klasses: k,
		callback: callbackFn<InstanceType<k[number]>, res>,
	): Switch<target, result | res, Exclude<notChecked, InstanceType<k[number]>>>;
	whenInstance(
		klass: T.anyClass | T.anyClass[],
		callback: callbackFn<unknown, unknown>,
	) {
		if (!Array.isArray(klass)) {
			return this.#dispatch({
				test: (x) => x instanceof klass,
				callback,
			});
		}

		return this.#dispatch({
			test: (x) => klass.some((k) => x instanceof k),
			callback,
		});
	}

	whenString<res>(callback: callbackFn<string, res>) {
		return this.whenTypeOf('string', callback);
	}

	whenNumber<res>(callback: callbackFn<number, res>) {
		return this.whenTypeOf('number', callback);
	}

	whenBoolean<res>(callback: callbackFn<boolean, res>) {
		return this.whenTypeOf('boolean', callback);
	}

	whenSymbol<res>(callback: callbackFn<symbol, res>) {
		return this.whenTypeOf('symbol', callback);
	}

	whenBigint<res>(callback: callbackFn<bigint, res>) {
		return this.whenTypeOf('bigint', callback);
	}

	whenTypeOf<res>(
		type: 'string',
		callback: callbackFn<string, res>,
	): Switch<target, result | res, Exclude<notChecked, string>>;
	whenTypeOf<res>(
		type: 'number',
		callback: callbackFn<number, res>,
	): Switch<target, result | res, Exclude<notChecked, number>>;
	whenTypeOf<res>(
		type: 'boolean',
		callback: callbackFn<boolean, res>,
	): Switch<target, result | res, Exclude<notChecked, boolean>>;
	whenTypeOf<res>(
		type: 'symbol',
		callback: callbackFn<symbol, res>,
	): Switch<target, result | res, Exclude<notChecked, symbol>>;
	whenTypeOf<res>(
		type: 'bigint',
		callback: callbackFn<bigint, res>,
	): Switch<target, result | res, Exclude<notChecked, bigint>>;
	whenTypeOf<res>(type: typeofName, callback: callbackFn<any, res>) {
		return this.#dispatch({
			// biome-ignore lint/suspicious/useValidTypeof: <explanation>
			test: (x) => typeof x === type,
			callback,
		});
	}

	whenUndefined<res>(
		callback: callbackFn<undefined, res>,
	): Switch<target, result | res, Exclude<notChecked, undefined>> {
		return this.#dispatch({
			test: (x) => x === undefined,
			callback,
		});
	}

	whenNull<res>(
		callback: callbackFn<null, res>,
	): Switch<target, result | res, Exclude<notChecked, null>> {
		return this.#dispatch({
			test: (x) => x === null,
			callback,
		});
	}

	whenOptional<res>(callback: callbackFn<undefined | null, res>) {
		return this.#dispatch({
			test: (x) => x == null,
			callback,
		});
	}

	whenTrue<res>(
		callback: callbackFn<true, res>,
	): Switch<target, result | res, Exclude<notChecked, true>> {
		return this.#dispatch({
			test: () => true,
			callback,
		});
	}

	whenFalse<res>(
		callback: callbackFn<false, res>,
	): Switch<target, result | res, Exclude<notChecked, false>> {
		return this.#dispatch({
			test: () => false,
			callback,
		});
	}

	map<res>(fn: callbackFn<result, res>): Switch<target, res, notChecked> {
		if (this.#mapper == null) {
			return this.#update({
				mapper: fn,
			}) as unknown as Switch<target, res, notChecked>;
		}

		const oldMapper = this.#mapper!;
		return this.#update({
			mapper: (x, ctx) => fn(oldMapper(x, ctx), ctx),
		}) as unknown as Switch<target, res, notChecked>;
	}
}

export const switchCase = <target>(target: target) => new Switch({ target });

export const compileSwitch = <target>(): Switch<target, never, target> =>
	new Switch();

// Errors

export class SwitchNoMatch extends Err.init({
	constructor(value: any) {
		return {
			data: { value },
			message: `No match found and no default provided for ${value}`,
		};
	},
}) {}
