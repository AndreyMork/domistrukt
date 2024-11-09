import * as Im from 'immutable';

// import type * as T from '#Types';
import * as Err from './Error.ts';
import * as StruktBase from './StruktBase.ts';
import * as Switch from './Switch.ts';

export type enumValue = string | number;
export type enumValues = Iterable<enumValue>;

export type enumStrukt<values extends enumValue> = Enum<values> & {
	[key in values]: key;
};

export { Enum, Enum as t };
class Enum<values extends enumValue> {
	#values: Im.Set<values>;

	constructor(values: Iterable<values>) {
		this.#values = Im.Set(values);

		const data = {} as any;
		for (const value of values) {
			data[value] = value;
		}

		StruktBase.construct({
			target: this,
			data,
			hidden: [],
		});
	}

	get $$t(): values {
		return undefined as any;
	}

	get $values() {
		return this.#values;
	}

	[Symbol.iterator]() {
		return this.#values[Symbol.iterator]();
	}

	$has(value: unknown): value is values {
		return this.#values.has(value as values);
	}

	$is<target extends values>(target: target, value: unknown): value is target {
		return target === value;
	}

	$assert<subValues extends values>(
		value: unknown,
		subValues?: Iterable<subValues>,
	): values {
		const testSet = subValues ? Im.Set(subValues) : this.#values;

		if (!testSet.has(value as subValues)) {
			throw new EnumAssertionError({
				target: value,
				expected: testSet.toArray(),
			});
		}

		return value as values;
	}

	$toArray() {
		return this.#values.toArray();
	}

	$subEnum<subValues extends values>(subValues: Iterable<subValues>) {
		return init(subValues);
	}

	$add<newValues extends enumValue>(...values: newValues[]) {
		return init(this.#values.union(values));
	}

	$remove<removedValues extends values>(...values: removedValues[]) {
		const newSet = this.#values.subtract(values) as Im.Set<
			Exclude<values, removedValues>
		>;
		return init(newSet);
	}

	$switchCase(value: values) {
		return Switch.switchCase<values>(value as values);
	}

	$assertSwitchCase(value: unknown) {
		return this.$switchCase(this.$assert(value));
	}

	$compileSwitch() {
		return Switch.compileSwitch<values>();
	}
}

export const init = <values extends enumValue>(
	values: Iterable<values>,
): enumStrukt<values> => new Enum(values) as enumStrukt<values>;

export class EnumAssertionError extends Err.init({
	constructor(params: { target: unknown; expected: enumValue[] }) {
		const { target, expected } = params;
		const data = { target, expected };

		const message = `Invalid enum value: ${target}. Expected one of: ${expected.join(
			', ',
		)}`;

		return {
			message,
			data,
		};
	},
}) {}
