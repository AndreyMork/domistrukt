import * as Im from 'immutable';
// import * as Errors from './Errors.ts';
import * as Lib from './Lib.ts';
import type * as T from './Types/Types.d.ts';

export type params<data extends T.anyObject> = {
	// args: args;
	data: data;
	hidden: readonly PropertyKey[];
};

export type constructParams = {
	target: T.anyObject;
	data: T.anyObject;
	hidden: readonly PropertyKey[];
};

/**
 * Constructs an object by copying data and redefining hidden properties as accessors.
 * @param params - The parameters for construction.
 * @returns The constructed target object.
 */
export const construct = (params: constructParams) => {
	// removes prototype
	const data = { ...params.data };
	Reflect.deleteProperty(data, '__proto__');
	Object.assign(params.target, data);
	Lib.redefineAsAccessors(params.target, params.hidden);

	return params.target;
};

export class BasicStrukt {
	constructor(params: params<any>) {
		construct({
			target: this,
			data: params.data,
			hidden: params.hidden,
		});
	}
}

/**
 * Base class for Strukt.
 * @template args - The type of arguments.
 * @template data - The type of data.
 */
export class StruktBase<
	args extends T.anyArgs,
	data extends T.anyObject,
> extends BasicStrukt {
	readonly #dataKeys: Im.List<keyof data>;
	readonly #hidden: readonly PropertyKey[];

	constructor(params: params<data>) {
		super(params);
		this.#dataKeys = Im.List(Object.keys(params.data) as any);
		this.#hidden = [...params.hidden];
	}

	/**
	 * Gets the type of arguments.
	 * @returns The type of arguments.
	 */
	get $$argsT(): args {
		// @ts-expect-error
		return undefined;
	}

	/**
	 * Gets the first argument type.
	 * @returns The first argument type.
	 */
	get $$args1T(): args[0] {
		return undefined;
	}

	/**
	 * Gets the type of data returned by the constructor.
	 * @returns The type of data.
	 */
	get $$dataT(): data {
		// @ts-expect-error
		return undefined;
	}

	/**
	 * Retrieves the keys of the data returned by the constructor.
	 * @returns An array of data keys.
	 */
	$dataKeys() {
		return this.#dataKeys.toArray();
	}

	/**
	 * Creates a data object from the instance.
	 * @returns The data object.
	 */
	$data(): data {
		const target = {} as data;

		this.#dataKeys.forEach((key) => {
			target[key] = Reflect.get(this, key) as any;
		});

		return target;
	}

	/**
	 * Selects specific keys from the object.
	 * @param keys - The keys to select.
	 * @returns An object with the selected keys.
	 */
	$selectKeys<keys extends keyof this>(keys: keys[]) {
		return Lib.selectKeys(this, keys);
	}

	/**
	 * Creates a clone of the current object.
	 * @returns A cloned instance of the object.
	 */
	$clone(): this {
		const copy = construct({
			target: {},
			data: this,
			hidden: this.#hidden,
		});

		Object.setPrototypeOf(copy, Object.getPrototypeOf(this));

		return copy;
	}

	/**
	 * Updates the object with a patch.
	 * @param patch - The patch to apply.
	 * @returns A new instance with the applied patch.
	 */
	$update(patch: Partial<typeof this.$$dataT>): this {
		const copy = construct({
			target: {},
			data: { ...this, ...patch },
			hidden: this.#hidden,
		});

		Object.setPrototypeOf(copy, Object.getPrototypeOf(this));

		return copy;
	}

	/**
	 * Applies a patch function to the object.
	 * @param fn - The function that returns a patch.
	 * @returns A new instance with the applied patch.
	 */
	$patch(fn: (data: this) => Partial<typeof this.$$dataT>): this {
		const patch = fn(this.$clone());
		return this.$update(patch);
	}

	/**
	 * Creates a new instance of the object.
	 * @param args - The arguments to pass to the constructor.
	 * @returns A new instance of the object.
	 */
	$create(...args: args): this {
		// @ts-expect-error
		return new this.constructor(...args);
	}
}

export { StruktBase as t };
