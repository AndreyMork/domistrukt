import * as Japa from '@japa/runner';
import * as FC from 'fast-check';

import * as FlatObject from '#Src/FlatObject.ts';
import * as Utils from '#Tests/Utils.ts';

const test = Japa.test;

test.group('FlatObject', () => {
	test('`fromObject` should create a FlatObject from a nested object', ({
		expect,
	}) => {
		const obj = { a: 1, b: { c: 2 } };
		const flatObj = FlatObject.fromObject(obj);

		expect(flatObj).toBeInstanceOf(FlatObject.t);
		expect(flatObj.toJS()).toEqual(obj);
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

	test('`Property` should store keys and value correctly', ({ expect }) => {
		const keys = FlatObject.makeKeys(['a', 'b']);
		const value = 42;
		const property = new FlatObject.Property(keys, value);

		expect(property.keys).toEqual(keys);
		expect(property.value).toBe(value);
	});

	test('`Property.setValue` should update the value and return a new Property', ({
		expect,
	}) => {
		const keys = FlatObject.makeKeys(['a', 'b']);
		const initialValue = 42;
		const newValue = 100;
		const property = new FlatObject.Property(keys, initialValue);

		const newProperty = property.setValue(newValue);

		expect(newProperty).not.toBe(property);
		expect(newProperty.value).toBe(newValue);
		expect(newProperty.keys).toEqual(keys);
		expect(property.value).toBe(initialValue);
	});

	test('`flatObject` should work without arguments', ({ expect }) => {
		const obj = FlatObject.flatObject();
		expect(obj).toBeInstanceOf(FlatObject.t);
		expect(obj.index.size).toBe(0);
	});
});
