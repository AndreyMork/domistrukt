import * as Err from './Error.ts';

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

	get<key extends keyof shape>(key: key): shape[key] {
		if (!this.has(key)) {
			throw new Error(`Key ${key} not found in shape`);
		}

		return this.#shape[key];
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

		return {
			data,
			message: `DispatchMap key not found: ${key}. Available keys: ${keys.join(
				', ',
			)}`,
		};
	},
}) {}
