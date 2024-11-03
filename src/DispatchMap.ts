import * as Err from './Error.ts';
import * as Lib from './Lib.ts';

export type mapShape = {
	[key: PropertyKey]: any;
};

export { DispatchMap, DispatchMap as t };

// TODO tsdoc
// TODO tests

class DispatchMap<shape extends mapShape> {
	readonly #shape: shape;
	constructor(shape: shape) {
		this.#shape = { ...shape };
	}

	get shape() {
		return this.#shape;
	}

	get $$key(): keyof shape {
		return undefined as any;
	}

	get $$value(): shape[keyof shape] {
		return undefined as any;
	}

	has(key: unknown): key is keyof shape {
		return (key as PropertyKey) in this.#shape;
	}

	keys(): (keyof shape)[] {
		return Object.keys(this.#shape);
	}

	values(): shape[keyof shape][] {
		return Object.values(this.#shape);
	}

	entries() {
		return Object.entries(this.#shape).map(([key, value]) => ({
			key: key as keyof shape,
			value: value as shape[keyof shape],
		}));
	}

	get<key extends keyof shape>(key: key): shape[key] {
		if (!this.has(key)) {
			throw new DispatchMapKeyNotFound({ key, map: this });
		}

		return this.#shape[key];
	}

	getSafe<key extends keyof shape, notSetValue = undefined>(
		key: key,
		notSetValue?: notSetValue,
	): shape[key] | notSetValue {
		if (this.has(key)) {
			return this.get(key);
		}

		return notSetValue as notSetValue;
	}

	index(key: PropertyKey): shape[keyof shape] {
		return this.get(key);
	}

	indexSafe<notSetValue = undefined>(
		key: PropertyKey,
		notSetValue?: notSetValue,
	): shape[keyof shape] | notSetValue {
		return this.getSafe(key, notSetValue);
	}

	@Lib.lazy()
	get reverse(): DispatchMap<{ [key in typeof this.$$value]: keyof shape }> {
		const shape = {} as any;

		for (const { key, value } of this.entries()) {
			if (value in shape) {
				continue;
			}

			shape[value] = key;
		}

		return new DispatchMap(shape);
	}
}

export const init = <shape extends mapShape>(shape: shape) =>
	new DispatchMap(shape);

export class DispatchMapKeyNotFound extends Err.init({
	constructor(params: { key: unknown; map: DispatchMap<any> }) {
		const { key, map } = params;
		const keys = map.keys();

		const data = {
			key,
			map,
			keys,
		};

		const keysString = keys.join(', ');
		const message = `Key not found: ${key}. Available keys: ${keysString}`;

		return {
			data,
			message,
		};
	},
}) {}
