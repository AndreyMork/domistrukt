import * as Japa from '@japa/runner';

import * as Strukt from '#Main';

const test = Japa.test;

test.group('Strukt - Initialization', () => {
	type data = {
		valueString: string;
		valueNumber: number;
		valueBoolean: boolean;
	};

	test('creates instance with correct initial properties', ({ expect }) => {
		class A extends Strukt.init<data>() {}

		const inputData = {
			valueString: '1',
			valueNumber: 1,
			valueBoolean: true,
		};

		const instance = new A(inputData);

		const targetData = {
			valueString: '1',
			valueNumber: 1,
			valueBoolean: true,
		};

		expect(instance).toBeInstanceOf(A);
		expect(instance).toEqual(targetData);
		expect(instance).not.toStrictEqual(targetData);
	});

	test('applies custom create function to modify properties', ({ expect }) => {
		class A extends Strukt.init({
			create(input: data) {
				return { ...input, valueNumber: input.valueNumber + 1 };
			},
		}) {}

		const inputData = {
			valueString: '1',
			valueNumber: 1,
			valueBoolean: true,
		};

		const instance = new A(inputData);

		const targetData = {
			valueString: '1',
			valueNumber: 2,
			valueBoolean: true,
		};

		expect(instance).toEqual(targetData);
		expect(instance).not.toStrictEqual(targetData);
	});

	test('handles different input and output types in create function', ({
		expect,
	}) => {
		class A extends Strukt.init({
			create(input: number) {
				return {
					valueNumber: input,
					valueString: '1',
					valueBoolean: true,
				};
			},
		}) {}

		const instance = new A(1);
		const targetData = {
			valueNumber: 1,
			valueString: '1',
			valueBoolean: true,
		};

		expect(instance).toEqual(targetData);
		expect(instance).not.toStrictEqual(targetData);
	});

	test('handles undefined input by using default values', ({ expect }) => {
		class A extends Strukt.init({
			create: () => ({
				valueNumber: 1,
				valueString: '1',
				valueBoolean: true,
			}),
		}) {}

		const instance = new A();
		const targetData = {
			valueNumber: 1,
			valueString: '1',
			valueBoolean: true,
		};

		expect(instance).toEqual(targetData);
		expect(instance).not.toStrictEqual(targetData);
	});

	test('creates accessors for specified properties', ({ expect }) => {
		class A extends Strukt.init<data>({
			asAccessor: ['valueNumber'],
		}) {}

		const instance = new A({
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

	test('retains additional properties in the instance', ({ expect }) => {
		class A extends Strukt.init<data>({
			asAccessor: ['valueNumber'],
		}) {}

		const data = {
			valueNumber: 1,
			valueString: '1',
			valueBoolean: true,
			extra: 'extra',
		};

		const instance = new A(data);

		expect(instance).toHaveProperty('valueNumber', 1);
		expect(instance).toHaveProperty('valueString', '1');
		expect(instance).toHaveProperty('valueBoolean', true);
		expect(instance).toHaveProperty('extra', 'extra'); // NOTE: no way to filter extra properties currently
	});

	test('preserves child class methods without overriding', ({
		expect,
		expectTypeOf,
	}) => {
		type data = { x: number; fn: string };
		class A extends Strukt.init<data>({ checkPrototype: true }) {
			// @ts-expect-error
			override fn() {}
		}

		const instance = new A({ x: 1, fn: '1' });

		expect(typeof instance.fn).toBe('function');
		expect(() => instance.fn()).not.toThrow();
		expectTypeOf(instance.fn).toBeFunction();
		expect(instance.x).toBe(1);

		class B extends Strukt.init<data>() {
			// @ts-expect-error
			override fn() {}
		}

		const instance2 = new B({ x: 1, fn: '1' });
		expect(instance2.fn).toBe('1');
		expect(instance2.x).toBe(1);

		class C extends Strukt.init<data>({ checkPrototype: false }) {
			// @ts-expect-error
			override fn() {}
		}

		const instance3 = new C({ x: 1, fn: '1' });
		expect(instance3.fn).toBe('1');
		expect(instance3.x).toBe(1);
	});
});

test.group('Strukt - Type Handling', () => {
	type data = {
		valueString: string;
		valueNumber: number;
		valueBoolean: boolean;
		optional?: string;
	};

	type input = { value: number };

	test('ensures constructor parameter matches data type', ({
		expectTypeOf,
	}) => {
		class TestClass extends Strukt.init<data>() {}
		const instance = new TestClass({
			valueString: '1',
			valueNumber: 1,
			valueBoolean: true,
		});

		expectTypeOf(instance).toEqualTypeOf<data>();
		expectTypeOf(TestClass).constructorParameters.toEqualTypeOf<[data]>();
	});

	test('makes constructor parameter optional when input is undefined', ({
		expectTypeOf,
	}) => {
		class TestClass extends Strukt.init({
			create: (): data => ({
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

	test('makes constructor parameter optional when input is optional', ({
		expectTypeOf,
	}) => {
		class TestClass extends Strukt.init({
			create: (input?: number): data => ({
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

	test('ensures constructor parameter is of type input when specified', ({
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

	test('infers constructor parameter from create function', ({
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

	test('infers parameter from create function when output type matches data type', ({
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
