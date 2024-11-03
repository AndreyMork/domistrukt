import * as Im from 'immutable';

import * as Err from './Error.ts';
// import * as Lib from './Lib.ts';
// import * as Strukt from './Strukt.ts';
import type * as T from './Types/Types.d.ts';

export type callbackFn<data, result> = (value: data) => result;
export type predicateFn<data> = (value: data) => boolean;

// TODO tests
// TODO tsdocs
// TODO instance structural exclude warning
// TODO as const warning

export type typeofName = 'string' | 'number' | 'boolean' | 'symbol' | 'bigint';

type isNever<t> = [t] extends [never] ? true : false;

type dispatcher = {
	test: predicateFn<any>;
	callback: callbackFn<any, any>;
};

type params<result> = {
	dispatchers?: Im.List<dispatcher>;
	mapper?: callbackFn<result, any>;
	unsaved?: boolean;
};

export { Switch, Switch as t };
/**
 * A class that allows for conditional execution of callbacks based on various criteria.
 * @template data - The type of data being tested.
 * @template result - The type of result returned by the callbacks.
 * @template notChecked - The type of data that has not been checked.
 */
class Switch<target, result = never, notChecked = target> {
	readonly target: target;
	#dispatchers: Im.List<dispatcher>;
	#mapper?: (result: result) => any;
	#unsaved?: boolean;

	constructor(target: target, params?: params<result>) {
		this.target = target;
		this.#dispatchers = Im.List(params?.dispatchers);
		this.#mapper = params?.mapper;
		this.#unsaved = params?.unsaved ?? false;
	}

	#dispatch<t extends Switch<any, any, any>>(dispatcher: dispatcher): t {
		return this.#update({
			dispatchers: this.#dispatchers.push(dispatcher),
		}) as t;
	}

	run(): result {
		if (this.#unsaved) {
			throw new CannotRunUnsavedCompileSwitch();
		}

		for (const dispatcher of this.#dispatchers) {
			if (!dispatcher.test(this.target)) {
				continue;
			}

			const result = dispatcher.callback(this.target);

			if (this.#mapper != null) {
				return this.#mapper(result);
			}

			return result;
		}

		throw new SwitchNoMatch(this.target);
	}

	verify(
		..._notChecked: isNever<notChecked> extends true
			? []
			: [never, 'Not all cases are checked:', notChecked]
	): this {
		return this;
	}

	runStrict(
		..._notChecked: isNever<notChecked> extends true
			? []
			: [never, 'Not all cases are checked:', notChecked]
	) {
		return this.run();
	}

	clone() {
		return this.#update();
	}

	#update(params?: Partial<params<result>> & { data?: target }) {
		return new Switch(params?.data ?? this.target, {
			dispatchers: params?.dispatchers ?? this.#dispatchers,
			unsaved: params?.unsaved ?? this.#unsaved,
			mapper: params?.mapper ?? this.#mapper,
		});
	}

	#setData(data: target) {
		// @ts-expect-error
		this.target = data;
		return this;
	}

	save() {
		const saved = this.#update({ unsaved: false });
		return (data: target): result => saved.#setData(data).run();
	}

	saveStrict(
		..._notChecked: isNever<notChecked> extends true
			? []
			: [never, 'Not all cases are checked:', notChecked]
	) {
		return this.save();
	}

	when<checked, res = result>(
		test: boolean | predicateFn<target>,
		callback: callbackFn<target, res>,
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

	otherwiseThrow(error?: Error | ((cause: Error) => Error)) {
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

		return this.otherwise(() => {
			const cause = new SwitchNoMatch(this.target);
			throw error(cause);
		});
	}

	whenValue<val extends any[], res>(
		value: val,
		callback: callbackFn<val[number], res>,
	): Switch<target, result | res, Exclude<notChecked, val[number]>>;
	whenValue<val, res>(
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

	whenInstance<k extends T.anyKlass, res>(
		klass: k,
		callback: callbackFn<InstanceType<k>, res>,
	): Switch<target, result | res, Exclude<notChecked, InstanceType<k>>>;
	whenInstance<k extends T.anyKlass[], res>(
		klasses: k,
		callback: callbackFn<InstanceType<k[number]>, res>,
	): Switch<target, result | res, Exclude<notChecked, InstanceType<k[number]>>>;
	whenInstance(
		klass: T.anyKlass | T.anyKlass[],
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

	map<res>(fn: (x: result) => res): Switch<target, res, notChecked> {
		if (this.#mapper == null) {
			return this.#update({
				mapper: fn,
			}) as unknown as Switch<target, res, notChecked>;
		}

		const oldMapper = this.#mapper;
		return this.#update({
			mapper: (x) => fn(oldMapper!(x)),
		}) as unknown as Switch<target, res, notChecked>;
	}
}

export const switchCase = <data>(data: data) => new Switch(data);

export const compileSwitch = <data>(): Switch<data, never, data> =>
	new Switch(undefined as any, { unsaved: true });

// Errors

export class SwitchNoMatch extends Err.init({
	constructor(value: any) {
		return {
			data: { value },
			message: `No match found and no default provided for ${value}`,
		};
	},
}) {}

export class CannotRunUnsavedCompileSwitch extends Err.staticError({
	message: 'Cannot run unsaved CompileSwitch',
}) {}
