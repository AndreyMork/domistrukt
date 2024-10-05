import * as Japa from '@japa/runner';

import * as Strukt from '#Main';

const test = Japa.test;

test.group('Strukt - init', () => {
	type data = {
		valueString: string;
		valueNumber: number;
		valueBoolean: boolean;
	};

	test('should create an instance with correct properties', ({ expect }) => {
		class TestClass extends Strukt.init<data>() {}

		const inputData = {
			valueString: '1',
			valueNumber: 1,
			valueBoolean: true,
		};

		const instance = new TestClass(inputData);

		const targetData = {
			valueString: '1',
			valueNumber: 1,
			valueBoolean: true,
		};

		expect(instance).toBeInstanceOf(TestClass);
		expect(instance).toEqual(targetData);
		expect(instance).not.toStrictEqual(targetData);
	});

	test('should create an instance with modified properties using custom create function', ({
		expect,
	}) => {
		class TestClass extends Strukt.init<data>({
			create: (input) => ({ ...input, valueNumber: input.valueNumber + 1 }),
		}) {}

		const inputData = {
			valueString: '1',
			valueNumber: 1,
			valueBoolean: true,
		};

		const instance = new TestClass(inputData);

		const targetData = {
			valueString: '1',
			valueNumber: 2,
			valueBoolean: true,
		};

		expect(instance).toEqual(targetData);
		expect(instance).not.toStrictEqual(targetData);
	});

	test('should create an instance with different input and output types', ({
		expect,
	}) => {
		class TestClass extends Strukt.init<data, number>({
			create: (input) => ({
				valueNumber: input,
				valueString: '1',
				valueBoolean: true,
			}),
		}) {}

		const instance = new TestClass(1);
		const targetData = {
			valueNumber: 1,
			valueString: '1',
			valueBoolean: true,
		};

		expect(instance).toEqual(targetData);
		expect(instance).not.toStrictEqual(targetData);
	});

	test('should handle undefined input correctly', ({ expect }) => {
		class TestClass extends Strukt.init<data, undefined>({
			create: () => ({
				valueNumber: 1,
				valueString: '1',
				valueBoolean: true,
			}),
		}) {}

		const instance = new TestClass();
		const targetData = {
			valueNumber: 1,
			valueString: '1',
			valueBoolean: true,
		};

		expect(instance).toEqual(targetData);
		expect(instance).not.toStrictEqual(targetData);
	});

	test('should create accessors for specified properties', ({ expect }) => {
		class TestClass extends Strukt.init<data>({
			asAccessor: ['valueNumber'],
		}) {}

		const instance = new TestClass({
			valueNumber: 1,
			valueString: '1',
			valueBoolean: true,
		});

		const valueNumberDescriptor = Object.getOwnPropertyDescriptor(
			instance,
			'valueNumber',
		);

		const valueStringDescriptor = Object.getOwnPropertyDescriptor(
			instance,
			'valueString',
		);

		expect(valueNumberDescriptor).toHaveProperty('get');
		expect(valueNumberDescriptor).toHaveProperty('set');
		expect(valueNumberDescriptor).not.toHaveProperty('value');

		expect(valueStringDescriptor).not.toHaveProperty('get');
		expect(valueStringDescriptor).not.toHaveProperty('set');
		expect(valueStringDescriptor).toHaveProperty('value');
	});

	test('retains extra properties in the instance', ({ expect }) => {
		class TestClass extends Strukt.init<data>({
			asAccessor: ['valueNumber'],
		}) {}

		const data = {
			valueNumber: 1,
			valueString: '1',
			valueBoolean: true,
			extra: 'extra',
		};

		const instance = new TestClass(data);

		expect(instance).toHaveProperty('valueNumber', 1);
		expect(instance).toHaveProperty('valueString', '1');
		expect(instance).toHaveProperty('valueBoolean', true);
		expect(instance).toHaveProperty('extra', 'extra'); // NOTE: no way to filter extra properties currently
	});

	// TODO: docs
	test('should not override methods from child class', ({
		expect,
		expectTypeOf,
	}) => {
		type data = { x: number; fn: string };
		class TestClass extends Strukt.init<data>({ checkPrototype: true }) {
			// @ts-expect-error
			override fn() {}
		}

		const instance = new TestClass({ x: 1, fn: '1' });

		expect(typeof instance.fn).toBe('function');
		expect(() => instance.fn()).not.toThrow();
		expectTypeOf(instance.fn).toBeFunction();
		expect(instance.x).toBe(1);

		class TestClass2 extends Strukt.init<data>() {
			// @ts-expect-error
			override fn() {}
		}

		const instance2 = new TestClass2({ x: 1, fn: '1' });
		expect(instance2.fn).toBe('1');
		expect(instance2.x).toBe(1);

		class TestClass3 extends Strukt.init<data>({ checkPrototype: false }) {
			// @ts-expect-error
			override fn() {}
		}

		const instance3 = new TestClass3({ x: 1, fn: '1' });
		expect(instance3.fn).toBe('1');
		expect(instance3.x).toBe(1);
	});
});

test.group('Strukt - types', () => {
	type data = {
		valueString: string;
		valueNumber: number;
		valueBoolean: boolean;
		optional?: string;
	};

	type input = { value: number };

	test('constructor parameter should match data type', ({ expectTypeOf }) => {
		class TestClass extends Strukt.init<data>() {}
		const instance = new TestClass({
			valueString: '1',
			valueNumber: 1,
			valueBoolean: true,
		});

		expectTypeOf(instance).toEqualTypeOf<data>();
		expectTypeOf(TestClass).constructorParameters.toEqualTypeOf<[data]>();
	});

	test('constructor parameter should be optional when input is undefined', ({
		expectTypeOf,
	}) => {
		class TestClass extends Strukt.init<data, undefined>({
			create: () => ({
				valueString: '1',
				valueNumber: 1,
				valueBoolean: true,
			}),
		}) {}

		const instance = new TestClass();

		expectTypeOf(instance).toEqualTypeOf<data>();
		expectTypeOf(TestClass).constructorParameters.toEqualTypeOf<
			[input?: undefined] | []
		>();
	});

	test('constructor parameter should be optional when input is optional', ({
		expectTypeOf,
	}) => {
		class TestClass extends Strukt.init<data, undefined | number>({
			create: (input) => ({
				valueString: '1',
				valueNumber: input ?? 1,
				valueBoolean: true,
			}),
		}) {}

		const instance = new TestClass();

		expectTypeOf(instance).toEqualTypeOf<data>();
		expectTypeOf(TestClass).constructorParameters.toEqualTypeOf<
			[input?: number] | []
		>();
	});

	test('constructor parameter should be of type input when input type specified', ({
		expectTypeOf,
	}) => {
		class TestClass extends Strukt.init<data, input>({
			create: (input) => ({
				valueString: '1',
				valueNumber: input.value,
				valueBoolean: true,
			}),
		}) {}

		const instance = new TestClass({ value: 1 });

		expectTypeOf(instance).toEqualTypeOf<data>();
		expectTypeOf(TestClass).constructorParameters.toEqualTypeOf<
			[input: input]
		>();
	});

	test('constructor parameter should be inferred from create function', ({
		expectTypeOf,
	}) => {
		class TestClass extends Strukt.init({
			create: (input: input): data => ({
				valueString: '1',
				valueNumber: input.value,
				valueBoolean: true,
			}),
		}) {}

		const instance = new TestClass({ value: 1 });

		expectTypeOf(instance).toEqualTypeOf<data>();
		expectTypeOf(TestClass).constructorParameters.toEqualTypeOf<
			[input: input]
		>();
	});

	test('parameter should be inferred from create function when output type is the same as data type', ({
		expectTypeOf,
	}) => {
		class TestClass extends Strukt.init({
			create: (input: data): data => ({ ...input }),
		}) {}

		const instance = new TestClass({
			valueString: '1',
			valueNumber: 1,
			valueBoolean: true,
		});

		expectTypeOf(instance).toEqualTypeOf<data>();
		expectTypeOf(TestClass).constructorParameters.toEqualTypeOf<
			[input: data]
		>();
	});
});
