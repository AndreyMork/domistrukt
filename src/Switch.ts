import * as Im from 'immutable';

import * as Err from './Errors.ts';
import * as Strukt from './Strukt.ts';
import type * as T from './Types/Types.d.ts';
export type callbackFn<data, result> = (value: data) => result;
export type predicateFn<data> = (value: data) => boolean;

// TODO tests

class Dispatcher extends Strukt.init({
	constructor(params: {
		test: predicateFn<any>;
		callback: callbackFn<any, any>;
	}) {
		return {
			test: params.test,
			callback: params.callback,
		};
	},
}) {}

/**
 * A class that allows for conditional execution of callbacks based on various criteria.
 * @template data - The type of data being tested.
 * @template result - The type of result returned by the callbacks.
 */
export class Switch<data, result> {
	#dispatchers: Im.List<Dispatcher> = Im.List();

	#push(dispatcher: Dispatcher) {
		this.#dispatchers = this.#dispatchers.push(dispatcher);
		return this;
	}

	/**
	 * Adds a dispatcher that matches a specific value.
	 * @param value - The value to match.
	 * @param callback - The callback to execute if the value matches.
	 * @returns The current instance of Switch for chaining.
	 */
	value<val>(value: val, callback: callbackFn<val, result>) {
		return this.#push(
			new Dispatcher({
				test: (x) => x === value,
				callback,
			}),
		);
	}

	/**
	 * Adds a dispatcher that matches any value in a given array.
	 * @param values - An array of values to match.
	 * @param callback - The callback to execute if any value matches.
	 * @returns The current instance of Switch for chaining.
	 */
	values<values extends any[]>(
		values: values,
		callback: callbackFn<values[number], result>,
	) {
		const set = Im.Set(values);
		return this.#push(
			new Dispatcher({
				test: (x) => set.has(x),
				callback,
			}),
		);
	}

	/**
	 * Adds a dispatcher that matches instances of a specific class.
	 * @param klass - The class to match instances of.
	 * @param callback - The callback to execute if the instance matches.
	 * @returns The current instance of Switch for chaining.
	 */
	instance<k extends T.anyKlass>(
		klass: k,
		callback: callbackFn<InstanceType<k>, result>,
	) {
		return this.#push(
			new Dispatcher({
				test: (x) => x instanceof klass,
				callback,
			}),
		);
	}
	/**
	 * Adds a dispatcher that matches any instance of the given classes.
	 * @param klasses - An array of classes to match instances of.
	 * @param callback - The callback to execute if any instance matches.
	 * @returns The current instance of Switch for chaining.
	 */
	instances<klasses extends T.anyKlass[]>(
		klasses: klasses,
		callback: callbackFn<InstanceType<klasses[number]>, result>,
	) {
		const testValues = Im.List(klasses);

		return this.#push(
			new Dispatcher({
				test: (x) => testValues.some((k) => x instanceof k),
				callback,
			}),
		);
	}

	/**
	 * Adds a dispatcher that matches a boolean flag.
	 * @param flag - The boolean flag to match.
	 * @param callback - The callback to execute if the flag is true.
	 * @returns The current instance of Switch for chaining.
	 */
	test(flag: boolean, callback: callbackFn<data, result>) {
		return this.#push(new Dispatcher({ test: () => flag, callback }));
	}

	/**
	 * Adds a dispatcher that matches a custom predicate function.
	 * @param test - The predicate function to match.
	 * @param callback - The callback to execute if the predicate returns true.
	 * @returns The current instance of Switch for chaining.
	 */
	predicate(test: predicateFn<data>, callback: callbackFn<data, result>) {
		return this.#push(new Dispatcher({ test, callback }));
	}

	/**
	 * Adds a default dispatcher that always matches.
	 * @param fn - The callback to execute if no other dispatcher matches.
	 * @returns The current instance of Switch for chaining.
	 */
	default(fn: () => result) {
		return this.#push(
			new Dispatcher({
				test: () => true,
				callback: fn,
			}),
		);
	}

	/**
	 * Executes the first matching dispatcher for a given value.
	 * @param value - The value to test against the dispatchers.
	 * @returns The result of the matching dispatcher's callback.
	 * @throws {Err.SwitchNoMatch} If no dispatcher matches the value.
	 */
	run(value: unknown): result {
		for (const dispatcher of this.#dispatchers) {
			if (dispatcher.test(value)) {
				return dispatcher.callback(value);
			}
		}

		throw new Err.SwitchNoMatch(value);
	}

	/**
	 * Compiles the switch into a function that can be executed with a value.
	 * @returns A function that takes a value and returns the result of the matching dispatcher's callback.
	 */
	compile() {
		return (value: data) => this.run(value);
	}
}

export { Switch as t };

/**
 * Factory function to create a new Switch instance.
 * @template result - The type of result returned by the callbacks.
 * @template data - The type of data being tested.
 * @returns A new instance of Switch.
 */
export const switchCase = <result, data = unknown>() =>
	new Switch<data, result>();
