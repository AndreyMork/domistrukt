import * as Errors from './Errors.ts';
import * as Lib from './Lib.ts';
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

/**
 * Base class for Strukt.
 * @template args - The type of arguments.
 */
export class StruktBase<args extends any[]> {
	readonly #args: args;

	constructor(...args: args) {
		this.#args = args;
	}

	/**
	 * Returns the arguments with which the instance was created.
	 * @returns {args} The arguments used during instantiation.
	 * @example
	 * const instance = new StruktBase(1, 2, 3);
	 * console.log(instance.$args); // Output: [1, 2, 3]
	 */
	get $args() {
		return this.#args;
	}

	/**
	 * Returns the first argument with which the instance was created.
	 * @returns {args[0]} The first argument.
	 * @example
	 * const instance = new StruktBase('first', 'second');
	 * console.log(instance.$args1); // Output: 'first'
	 */
	get $args1(): args[0] {
		return this.#args[0];
	}

	/**
	 * Selects keys from the instance.
	 * @template keys - The keys to select.
	 * @param {keys[]} keys - The keys to select.
	 * @returns {Partial<this>} The selected keys.
	 * @example
	 * const instance = new StruktBase({ a: 1, b: 2, c: 3 });
	 * console.log(instance.$selectKeys(['a', 'c'])); // Output: { a: 1, c: 3 }
	 */
	$selectKeys<keys extends keyof this>(keys: keys[]) {
		return Lib.selectKeys(this, keys);
	}

	/**
	 * Creates a new instance with the given arguments.
	 * @param {...args} args - The arguments for the new instance.
	 * @returns {this} The new instance.
	 */
	$create(...args: args): this {
		// @ts-expect-error
		return new this.constructor(...args);
	}

	/**
	 * Clones the current instance.
	 * @returns {this} The cloned instance.
	 * @example
	 * const instance = new StruktBase(1, 2, 3);
	 * const clone = instance.$clone();
	 * console.log(clone.$args); // Output: [1, 2, 3]
	 */
	$clone(): this {
		return this.$create(...this.#args);
	}

	/**
	 * Updates the instance with a patch.
	 * @param {Partial<typeof this.$args1>} patch - The patch to apply.
	 * @returns {args extends [any] ? this : never} The updated instance.
	 * @throws {UpdateArgsLengthError} If the number of arguments is greater than one.
	 * @example
	 * const instance = new StruktBase({ a: 1, b: 2 });
	 * const updated = instance.$update({ b: 3 });
	 * console.log(updated.$args1); // Output: { a: 1, b: 3 }
	 */
	$update(
		patch: Partial<typeof this.$args1>,
	): args extends [any] ? this : never {
		if (this.#args.length === 0) {
			// @ts-expect-error
			return this.$clone() as this;
		}

		if (this.#args.length > 1) {
			throw new Errors.UpdateArgsLengthError(this.#args.length);
		}

		const args = { ...this.$args1, ...patch };

		// @ts-expect-error
		return this.$create(args);
	}
}

export type struktClass<constructor extends T.anyConstructor> = {
	new (
		...params: Parameters<constructor>
	): StruktBase<Parameters<constructor>> & ReturnType<constructor>;
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
	const asAccessors = params.hidden ?? [];

	class Strukt extends StruktBase<args> {
		constructor(...args: args) {
			super(...args);
			const data: output = { ...constructorFn(...args) };

			Reflect.deleteProperty(data, '__proto__');
			Object.assign(this, data);
			Lib.redefineAsAccessors(this as output, asAccessors);
		}
	}

	return Strukt as struktClass<constructor>;
};
