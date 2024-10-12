import * as Japa from '@japa/runner';

// import * as Strukt from '#Main';
import * as Lib from '#Src/Lib.ts';

const test = Japa.test;

test.group('Strukt/Lib: `selectKeys`', () => {
	test('returns object with only specified keys', ({
		expect,
		expectTypeOf,
	}) => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = Lib.selectKeys(obj, ['a', 'c']);
		expect(result).toStrictEqual({ a: 1, c: 3 });
		expectTypeOf(result).toEqualTypeOf<{ a: number; c: number }>();

		expectTypeOf(result).not.toEqualTypeOf<typeof obj>();
	});

	test('returns empty object when no keys are specified', ({ expect }) => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = Lib.selectKeys(obj, []);
		expect(result).toStrictEqual({});
		expect(Object.keys(result)).toHaveLength(0);
	});

	test('infers correct types for function and return value', ({
		expectTypeOf,
	}) => {
		const obj = { a: 1, b: 2, c: '3' };
		const result = Lib.selectKeys(obj, ['a', 'c']);

		expectTypeOf(Lib.selectKeys<typeof obj>)
			.parameter(1)
			.toEqualTypeOf<Iterable<keyof typeof obj>>();
		expectTypeOf(result).toEqualTypeOf<{ a: number; c: string }>();
		expectTypeOf(result).not.toEqualTypeOf<typeof obj>();
	});
});

test.group('Strukt/Lib: `createInitFn`', () => {
	class Person {
		constructor(
			readonly name: string,
			readonly age: number,
		) {}
	}

	test('creates a function that initializes an instance of a given class', ({
		expect,
	}) => {
		const initPerson = Lib.createInitFn(Person);
		const john = initPerson('John', 30);
		expect(john).toBeInstanceOf(Person);
		expect(john.name).toBe('John');
		expect(john.age).toBe(30);
	});

	test('infers type correctly for function and return value', ({
		expectTypeOf,
	}) => {
		const initPerson = Lib.createInitFn(Person);
		const john = initPerson('John', 30);
		expectTypeOf(initPerson).returns.toEqualTypeOf<Person>();
		expectTypeOf(Person).constructorParameters.toEqualTypeOf<
			Parameters<typeof initPerson>
		>();
		expectTypeOf(john).toEqualTypeOf<Person>();
	});
});

test.group('Strukt/Lib: `redefineAsAccessors`', () => {
	test('redefines specified properties as accessors', ({ expect }) => {
		const obj = { a: 1, b: 2, c: 3 };
		const updated = Lib.redefineAsAccessors(obj, ['a', 'b']);

		expect(updated).toBe(obj);
		expect(obj).toEqual({ a: 1, b: 2, c: 3 });

		const aDescriptor = Object.getOwnPropertyDescriptor(obj, 'a');
		const bDescriptor = Object.getOwnPropertyDescriptor(obj, 'b');
		const cDescriptor = Object.getOwnPropertyDescriptor(obj, 'c');

		expect(aDescriptor).toHaveProperty('get');
		expect(aDescriptor).toHaveProperty('set');
		expect(aDescriptor).not.toHaveProperty('value');

		expect(bDescriptor).toHaveProperty('get');
		expect(bDescriptor).toHaveProperty('set');
		expect(bDescriptor).not.toHaveProperty('value');

		expect(cDescriptor).toHaveProperty('value');
		expect(cDescriptor).not.toHaveProperty('get');
		expect(cDescriptor).not.toHaveProperty('set');
	});

	test('allows getting and setting redefined properties', ({ expect }) => {
		const obj = { a: 1, b: 2, c: 3 };
		Lib.redefineAsAccessors(obj, ['a']);

		expect(obj.a).toBe(1);
		obj.a = 10;
		expect(obj.a).toBe(10);
	});

	test('mutates original object', ({ expect }) => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = Lib.redefineAsAccessors(obj, ['a', 'b']);

		expect(result).toBe(obj);
		expect(obj).toEqual({ a: 1, b: 2, c: 3 });
		result.a = 10;
		expect(obj.a).toBe(10);
	});

	test('preserves properties when spread', ({ expect }) => {
		const obj = { a: 1, b: 2, c: 3 };
		Lib.redefineAsAccessors(obj, ['a', 'b']);

		const spread = { ...obj };

		expect(spread).toEqual({ a: 1, b: 2, c: 3 });
		expect(Object.keys(spread)).toEqual(['a', 'b', 'c']);
	});

	test('preserves properties when Object.assign is used', ({ expect }) => {
		const obj = { a: 1, b: 2, c: 3 };
		Lib.redefineAsAccessors(obj, ['a', 'b']);

		const assigned = Object.assign({}, obj);

		expect(assigned).toEqual({ a: 1, b: 2, c: 3 });
		expect(Object.keys(assigned)).toEqual(['a', 'b', 'c']);
	});

	test('preserves properties when JSON stringified and parsed', ({
		expect,
	}) => {
		const obj = { a: 1, b: 2, c: 3 };
		Lib.redefineAsAccessors(obj, ['a', 'b']);

		const jsonParsed = JSON.parse(JSON.stringify(obj));

		expect(jsonParsed).toEqual({ a: 1, b: 2, c: 3 });
		expect(Object.keys(jsonParsed)).toEqual(['a', 'b', 'c']);
	});
});

test.group('Strukt/Lib: `lazy` decorator', () => {
	test('should lazily initialize a property', ({ expect }) => {
		class TestClass {
			counter = 0;

			@Lib.lazy()
			get computedValue() {
				this.counter += 1;
				return Math.random();
			}
		}

		const instance = new TestClass();
		const firstValue = instance.computedValue;
		const secondValue = instance.computedValue;

		expect(firstValue).toBe(secondValue);
		expect(instance.counter).toBe(1);
	});

	test('should not override different lazy properties', ({ expect }) => {
		class TestClass {
			counterA = 0;
			counterB = 0;

			@Lib.lazy()
			get lazyValueA() {
				this.counterA += 1;
				return `A${Math.random()}`;
			}

			@Lib.lazy()
			get lazyValueB() {
				this.counterB += 1;
				return `B${Math.random()}`;
			}
		}

		const instance = new TestClass();
		const firstValueA = instance.lazyValueA;
		const secondValueA = instance.lazyValueA;
		const firstValueB = instance.lazyValueB;
		const secondValueB = instance.lazyValueB;

		expect(firstValueA).toBe(secondValueA);
		expect(firstValueB).toBe(secondValueB);
		expect(firstValueA).not.toBe(firstValueB);
		expect(instance.counterA).toBe(1);
		expect(instance.counterB).toBe(1);
	});

	test('should not share lazy properties between instances', ({ expect }) => {
		class TestClass {
			counter = 0;

			@Lib.lazy()
			get computedValue() {
				this.counter += 1;
				return Math.random();
			}
		}

		const instance1 = new TestClass();
		const instance2 = new TestClass();

		const value1Instance1 = instance1.computedValue;
		const value2Instance1 = instance1.computedValue;

		const value1Instance2 = instance2.computedValue;
		const value2Instance2 = instance2.computedValue;

		expect(value1Instance1).toBe(value2Instance1);
		expect(value1Instance2).toBe(value2Instance2);
		expect(value1Instance1).not.toBe(value1Instance2);
		expect(instance1.counter).toBe(1);
		expect(instance2.counter).toBe(1);
	});

	test('should remain a getter and return computed value when useValue is false', ({
		expect,
	}) => {
		class TestClass {
			counter = 0;

			@Lib.lazy({ useValue: false })
			get computedValue() {
				this.counter += 1;
				return Math.random();
			}
		}

		const instance = new TestClass();
		const firstValue = instance.computedValue;
		const secondValue = instance.computedValue;

		const descriptor = Object.getOwnPropertyDescriptor(
			instance,
			'computedValue',
		);

		expect(descriptor?.get).not.toBeUndefined();
		expect(descriptor).toHaveProperty('get');
		expect(descriptor).not.toHaveProperty('value');
		expect(firstValue).toBe(secondValue);
		expect(instance.counter).toBe(1);
	});

	test('should allow setting value when useValue is true', ({ expect }) => {
		class TestClass {
			@Lib.lazy({ useValue: true })
			get computedValue() {
				return Math.random();
			}
		}

		const instance = new TestClass();
		const firstValue = instance.computedValue;
		// @ts-expect-error
		instance.computedValue = 42;
		const secondValue = instance.computedValue;

		expect(firstValue).not.toBe(42);
		expect(secondValue).toBe(42);
	});

	test('should allow setting value when useValue is false', ({ expect }) => {
		class TestClass {
			@Lib.lazy({ useValue: false })
			get computedValue() {
				return Math.random();
			}
		}

		const instance = new TestClass();
		const firstValue = instance.computedValue;
		// @ts-expect-error
		instance.computedValue = 42;
		const secondValue = instance.computedValue;

		expect(firstValue).not.toBe(42);
		expect(secondValue).toBe(42);
	});

	test('should do nothing if property is not a getter', ({ expect }) => {
		class TestClass {
			value = 0;

			@Lib.lazy()
			set computedValue(val: number) {
				this.value = val;
			}
		}

		const instance = new TestClass();
		instance.computedValue = 42;

		const descriptor = Object.getOwnPropertyDescriptor(
			instance,
			'computedValue',
		);

		expect(descriptor).toBeUndefined();
		expect(instance.value).toBe(42);
	});

	test('should handle options', ({ expect }) => {
		class TestClass {
			@Lib.lazy({ configurable: false, enumerable: false, writable: false })
			get computedValue() {
				return Math.random();
			}

			@Lib.lazy()
			get computedValue2() {
				return Math.random();
			}
		}

		const instance = new TestClass();
		expect(
			Object.getOwnPropertyDescriptor(instance, 'computedValue'),
		).toBeUndefined();

		instance.computedValue;
		instance.computedValue2;

		const descriptor = Object.getOwnPropertyDescriptor(
			instance,
			'computedValue',
		);

		const descriptorWithoutOptions = Object.getOwnPropertyDescriptor(
			instance,
			'computedValue2',
		);

		expect(descriptorWithoutOptions?.configurable).toBe(true);
		expect(descriptorWithoutOptions?.enumerable).toBe(true);
		expect(descriptorWithoutOptions?.writable).toBe(true);

		expect(descriptor?.configurable).toBe(false);
		expect(descriptor?.enumerable).toBe(false);
		expect(descriptor?.writable).toBe(false);
		const keys = Object.keys(instance);
		expect(keys).not.toContain('computedValue');
	});
});

test.group('Strukt/Lib: misc', () => {
	test('`klass` creates a class', ({ expect, expectTypeOf }) => {
		type t = {
			a: string;
			b: number;
		};

		class A extends Lib.klass<t>() {}

		const instance = new A();
		expect(instance).toBeInstanceOf(A);
		expectTypeOf(instance).toEqualTypeOf<t>();
	});
});
