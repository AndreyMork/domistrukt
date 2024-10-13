import * as Japa from '@japa/runner';
import * as FC from 'fast-check';

import * as FlatObject from '#Src/FlatObject.ts';
import * as Utils from '#Tests/Utils.ts';

const test = Japa.test;

test.group('Strukt/FlatObject', () => {
	test('`fromObject` should create a FlatObject from a nested object', ({
		expect,
	}) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject(obj);

		expect(flatObj).toBeInstanceOf(FlatObject.t);
		expect(flatObj.toJS()).toEqual(obj);
	});

	test('`toJS` should reconstruct the original object', ({ expect }) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject(obj);

		const copy = flatObj.toJS();
		expect(copy).toEqual(obj);
		expect(copy).not.toBe(obj);
	});

	test('`toJS` should preserve arrays', ({ expect }) => {
		const obj = { arr: [1, 2, 3] };
		const flatObj = FlatObject.fromObject(obj);

		const copy = flatObj.toJS<any>();
		expect(Array.isArray(copy.arr)).toBe(true);
		expect(copy.arr).toEqual([1, 2, 3]);
	});

	test('`get` should retrieve values correctly', ({ expect }) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject(obj);

		expect(flatObj.get(['a'])).toBe(1);
	});

	test('`set` should update values correctly', ({ expect }) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject(obj);

		const newFlatObj = flatObj.set(['b', 'c'], 3);
		expect(newFlatObj.get(['b', 'c'])).toBe(3);
		expect(flatObj.get(['b', 'c'])).toBe(2);
	});

	test('`setMut` should update values correctly and mutate the object', ({
		expect,
	}) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject(obj);

		flatObj.setMut(['b', 'c'], 3);
		expect(flatObj.get(['b', 'c'])).toBe(3);
	});

	test('`has` should verify the presence of keys accurately', ({ expect }) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject(obj);

		expect(flatObj.has(['a'])).toBe(true);
		expect(flatObj.has(['b', 'd'])).toBe(false);
	});

	test('`transform` should apply transformations to the FlatObject', ({
		expect,
	}) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject<any>(obj);

		const transformed = flatObj.transform((index) =>
			index.map((value) => value * 2),
		);
		expect(transformed.toJS()).toEqual({ a: 2, b: { c: 4 } });
	});

	test('`map` should map values to a new FlatObject', ({ expect }) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject<any>(obj);

		const mapped = flatObj.map((value) => value * 2);
		expect(mapped.toJS()).toEqual({ a: 2, b: { c: 4 } });
	});

	test('`filter` should filter values based on a condition', ({ expect }) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject<any>(obj);

		const filtered = flatObj.filter((value) => value > 1);
		expect(filtered.toJS()).toEqual({ b: { c: 2 } });
	});

	test('`merge` should merge two FlatObjects into one', ({ expect }) => {
		const obj1 = { a: 1 };
		const obj2 = { b: 2 };
		const flatObj1 = FlatObject.fromObject(obj1);
		const flatObj2 = FlatObject.fromObject(obj2);

		const merged = flatObj1.merge(flatObj2);
		expect(merged.toJS()).toEqual({ a: 1, b: 2 });
	});

	test('`isTrueObject` should correctly identify true objects', ({
		expect,
	}) => {
		expect(FlatObject.isTrueObject({})).toBe(true);
		expect(FlatObject.isTrueObject(new Object())).toBe(true);

		expect(FlatObject.isTrueObject([])).toBe(false);
		expect(FlatObject.isTrueObject(null)).toBe(false);
		expect(FlatObject.isTrueObject(Object.create(null))).toBe(false);
		expect(FlatObject.isTrueObject(undefined)).toBe(false);
		expect(FlatObject.isTrueObject(42)).toBe(false);
		expect(FlatObject.isTrueObject('string')).toBe(false);
		expect(FlatObject.isTrueObject(true)).toBe(false);
		expect(FlatObject.isTrueObject(() => {})).toBe(false);

		class A {}
		expect(FlatObject.isTrueObject(new A())).toBe(false);
	});

	test('`copy` should return a deep copy of the object', ({ expect }) => {
		const arbitrary = Utils.object();

		const copyWorks = FC.property(arbitrary, (obj) => {
			const copy = FlatObject.copy(obj);
			expect(copy).toEqual(obj);
		});

		FC.assert(copyWorks);
	});

	test('`keys` should return all keys in the FlatObject', ({ expect }) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject(obj);

		const keys = flatObj.keys();
		expect(keys.toJS()).toEqual([['a'], ['b', 'c']]);
	});

	test('`values` should return all values in the FlatObject', ({ expect }) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject(obj);

		const values = flatObj.values();
		expect(values.toJS()).toEqual([1, 2]);
	});

	test('`entries` should return all entries in the FlatObject', ({
		expect,
	}) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject(obj);

		const entries = flatObj.entries();
		expect(entries.toJS()).toEqual([
			{ keys: ['a'], value: 1 },
			{ keys: ['b', 'c'], value: 2 },
		]);
	});

	test('`flatObject` should return an empty FlatObject when no input is provided', ({
		expect,
	}) => {
		const emptyFlatObj = FlatObject.flatObject();
		expect(emptyFlatObj.isEmpty()).toBe(true);
	});

	test('`size` should return the correct number of entries in the FlatObject', ({
		expect,
	}) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject(obj);

		expect(flatObj.size).toBe(2);
	});

	test('`isEmpty` should return true for an empty FlatObject', ({ expect }) => {
		const emptyFlatObj = FlatObject.flatObject();
		expect(emptyFlatObj.isEmpty()).toBe(true);
	});

	test('`isEmpty` should return false for a non-empty FlatObject', ({
		expect,
	}) => {
		const obj = { a: 1 };
		const flatObj = FlatObject.fromObject(obj);

		expect(flatObj.isEmpty()).toBe(false);
	});

	test('`isNotEmpty` should return true for a non-empty FlatObject', ({
		expect,
	}) => {
		const obj = { a: 1 };
		const flatObj = FlatObject.fromObject(obj);

		expect(flatObj.isNotEmpty()).toBe(true);
	});

	test('`isNotEmpty` should return false for an empty FlatObject', ({
		expect,
	}) => {
		const emptyFlatObj = FlatObject.flatObject();
		expect(emptyFlatObj.isNotEmpty()).toBe(false);
	});
});
