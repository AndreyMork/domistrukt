import * as Japa from '@japa/runner';

// import * as Strukt from '#Main';
import * as Lib from '#Src/Lib.ts';

const test = Japa.test;

test.group('Strukt.Lib - `selectKeys`', () => {
	test('returns object with specified keys from object', ({
		expect,
		expectTypeOf,
	}) => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = Lib.selectKeys(obj, ['a', 'c']);
		expect(result).toStrictEqual({ a: 1, c: 3 });
		expectTypeOf(result).toEqualTypeOf<{ a: number; c: number }>();

		expectTypeOf(result).not.toEqualTypeOf<typeof obj>();
	});

	test('returns empty object when given empty keys', ({ expect }) => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = Lib.selectKeys(obj, []);
		expect(result).toStrictEqual({});
		expect(Object.keys(result)).toHaveLength(0);
	});

	test('infers type correctly for function and return value', ({
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

test.group('Strukt.Lib - `createInitFn`', () => {
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

test.group('Strukt.Lib - `createUpdateFn`', () => {
	class Person {
		name: string;
		age: number;

		constructor(params: { name: string; age: number }) {
			this.name = params.name;
			this.age = params.age;
		}
	}

	test('creates a function that updates an instance of a given class', ({
		expect,
	}) => {
		const updatePerson = Lib.createUpdateFn(Person);
		const john = new Person({ name: 'John', age: 30 });
		const updatedJohn = updatePerson(john, { age: 31 });
		expect(john.age).toBe(30);
		expect(updatedJohn).toBeInstanceOf(Person);
		expect(updatedJohn.name).toBe('John');
		expect(updatedJohn.age).toBe(31);
		expect(updatedJohn).not.toBe(john);
	});

	test('infers type correctly for function and return value', ({
		expectTypeOf,
	}) => {
		const updatePerson = Lib.createUpdateFn(Person);
		const john = new Person({ name: 'John', age: 30 });
		const updatedJohn = updatePerson(john, { age: 31 });
		expectTypeOf(updatePerson).parameters.toEqualTypeOf<
			[Person, Partial<{ name: string; age: number }>]
		>();
		expectTypeOf(updatePerson).returns.toEqualTypeOf<Person>();
		expectTypeOf(updatedJohn).toEqualTypeOf<Person>();
	});
});

test.group('Strukt.Lib - `createCloneFn`', () => {
	class Person {
		name: string;
		age: number;

		constructor(params: { name: string; age: number }) {
			this.name = params.name;
			this.age = params.age;
		}
	}

	test('creates a function that clones an instance of a given class', ({
		expect,
	}) => {
		const clonePerson = Lib.createCloneFn(Person);
		const john = new Person({ name: 'John', age: 30 });
		const johnClone = clonePerson(john);
		expect(johnClone).toBeInstanceOf(Person);
		expect(johnClone.name).toBe('John');
		expect(johnClone.age).toBe(30);
		expect(johnClone).not.toBe(john);
	});

	test('infers type correctly for function and return value', ({
		expectTypeOf,
	}) => {
		const clonePerson = Lib.createCloneFn(Person);
		const john = new Person({ name: 'John', age: 30 });
		const johnClone = clonePerson(john);
		expectTypeOf(clonePerson).returns.toEqualTypeOf<Person>();
		expectTypeOf(Person).constructorParameters.toEqualTypeOf<
			Parameters<typeof clonePerson>
		>();
		expectTypeOf(johnClone).toEqualTypeOf<Person>();
	});
});

test.group('Strukt.Lib - `redefinePropsAsAccessors`', () => {
	test('redefines specified properties as accessors', ({ expect }) => {
		const obj = { a: 1, b: 2, c: 3 };
		const updated = Lib.redefinePropsAsAccessors(obj, ['a', 'b']);

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
		Lib.redefinePropsAsAccessors(obj, ['a']);

		expect(obj.a).toBe(1);
		obj.a = 10;
		expect(obj.a).toBe(10);
	});

	test('mutates original object', ({ expect }) => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = Lib.redefinePropsAsAccessors(obj, ['a', 'b']);

		expect(result).toBe(obj);
		expect(obj).toEqual({ a: 1, b: 2, c: 3 });
		result.a = 10;
		expect(obj.a).toBe(10);
	});

	test('preserves properties when spread', ({ expect }) => {
		const obj = { a: 1, b: 2, c: 3 };
		Lib.redefinePropsAsAccessors(obj, ['a', 'b']);

		const spread = { ...obj };

		expect(spread).toEqual({ a: 1, b: 2, c: 3 });
		expect(Object.keys(spread)).toEqual(['a', 'b', 'c']);
	});

	test('preserves properties when Object.assign is used', ({ expect }) => {
		const obj = { a: 1, b: 2, c: 3 };
		Lib.redefinePropsAsAccessors(obj, ['a', 'b']);

		const assigned = Object.assign({}, obj);

		expect(assigned).toEqual({ a: 1, b: 2, c: 3 });
		expect(Object.keys(assigned)).toEqual(['a', 'b', 'c']);
	});

	test('preserves properties when JSON stringified and parsed', ({
		expect,
	}) => {
		const obj = { a: 1, b: 2, c: 3 };
		Lib.redefinePropsAsAccessors(obj, ['a', 'b']);

		const jsonParsed = JSON.parse(JSON.stringify(obj));

		expect(jsonParsed).toEqual({ a: 1, b: 2, c: 3 });
		expect(Object.keys(jsonParsed)).toEqual(['a', 'b', 'c']);
	});
});

test.group('Strukt.Lib - misc', () => {
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
