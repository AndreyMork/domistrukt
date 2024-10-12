import * as Japa from '@japa/runner';

import * as Strukt from '#Main';

const test = Japa.test;

test.group('Strukt: creation', () => {
	test('creates instance with properties from object', ({ expect }) => {
		class MyClass extends Strukt.init({
			constructor(args: { x: number; y: number }) {
				return {
					x: args.x,
					y: args.y,
					sum: args.x + args.y,
				};
			},
		}) {}
		const instance = new MyClass({ x: 1, y: 2 });

		expect(instance).toBeInstanceOf(Strukt.Base);
		expect(instance).toHaveProperty('x', 1);
		expect(instance).toHaveProperty('y', 2);
		expect(instance).toHaveProperty('sum', 3);
	});

	test('creates instance with properties from multiple arguments', ({
		expect,
	}) => {
		class MyClass extends Strukt.init({
			constructor(x: number, y: number) {
				return {
					x,
					y,
					sum: x + y,
				};
			},
		}) {}
		const instance = new MyClass(1, 2);

		expect(instance).toHaveProperty('x', 1);
		expect(instance).toHaveProperty('y', 2);
		expect(instance).toHaveProperty('sum', 3);
	});

	test('handles hidden properties correctly', ({ expect }) => {
		class MyClass extends Strukt.init({
			constructor(args: { x: number; y: number }) {
				return { ...args, secret: 'secret' };
			},
			hidden: ['secret'],
		}) {}

		const instance = new MyClass({ x: 1, y: 2 });
		expect(instance).toHaveProperty('x', 1);
		expect(instance).toHaveProperty('y', 2);
		expect(instance).toHaveProperty('secret', 'secret');

		const secretProperty = Object.getOwnPropertyDescriptor(instance, 'secret')!;
		expect(secretProperty).not.toBeUndefined();
		expect(secretProperty.value).toBeUndefined();
		expect(secretProperty.get).not.toBeUndefined();
		expect(secretProperty.set).not.toBeUndefined();
	});

	test('allows setting hidden properties', ({ expect }) => {
		class MyClass extends Strukt.init({
			constructor() {
				return { secret: 'secret' };
			},
			hidden: ['secret'],
		}) {}

		const instance = new MyClass();

		expect(instance).toHaveProperty('secret', 'secret');

		instance.secret = 'new secret';
		expect(instance.secret).toBe('new secret');
	});
});

test.group('Strukt: methods', () => {
	test('`$selectKeys` returns object with selected keys', ({ expect }) => {
		class MyClass extends Strukt.init({
			constructor(args: { x: number; y: number }) {
				return {
					...args,
					sum: args.x + args.y,
					salt: Math.random(),
				};
			},
		}) {
			get secret() {
				return 'secret';
			}
		}

		const instance = new MyClass({ x: 1, y: 2 });
		expect(instance.$selectKeys(['x', 'y'])).toEqual({ x: 1, y: 2 });
		expect(instance.$selectKeys(['x', 'sum'])).toEqual({ x: 1, sum: 3 });
		expect(instance.$selectKeys(['secret'])).toEqual({ secret: 'secret' });
		expect(instance.$selectKeys([])).toEqual({});
	});

	test('`$args` should return an object with the arguments passed to the constructor', ({
		expect,
	}) => {
		class MyClass extends Strukt.init({
			constructor(args: { x: number; y: number }, _value: number) {
				return args;
			},
		}) {}

		const instance = new MyClass({ x: 1, y: 2 }, 3);
		expect(instance.$args).toEqual([{ x: 1, y: 2 }, 3]);
	});

	test('`$args1` returns first constructor argument', ({ expect }) => {
		class MyClass extends Strukt.init({
			constructor(args: { x: number; y: number }) {
				return args;
			},
		}) {}

		const instance = new MyClass({ x: 1, y: 2 });
		expect(instance.$args1).toEqual({ x: 1, y: 2 });
	});

	test('`$clone` returns new instance with same properties', ({ expect }) => {
		class MyClass extends Strukt.init({
			constructor(args: { x: number; y: number }) {
				return {
					...args,
					sum: args.x + args.y,
					salt: Math.random(),
				};
			},
		}) {
			get secret() {
				return 'secret';
			}
		}

		const instance = new MyClass({ x: 1, y: 2 });
		const clone = instance.$clone();

		expect(clone).not.toBe(instance);
		expect(clone.secret).toBe(instance.secret);
		expect(clone.sum).toBe(instance.sum);
		expect(clone.salt).not.toBe(instance.salt);
	});

	test('`$update` returns new instance with updated properties', ({
		expect,
	}) => {
		class MyClass extends Strukt.init({
			constructor(args: { x: number; y: number }) {
				return args;
			},
		}) {}

		const instance = new MyClass({ x: 1, y: 2 });
		const updated = instance.$update({ x: 3, y: 4 });

		expect(instance.x).toBe(1);
		expect(instance.y).toBe(2);
		expect(updated).not.toBe(instance);
		expect(updated.x).toBe(3);
		expect(updated.y).toBe(4);
	});

	test('`$update` handles class with no arguments', ({ expect }) => {
		class MyClass extends Strukt.init({
			constructor(input?: undefined) {
				expect(input).toBeUndefined();
				return {
					x: 1,
				};
			},
		}) {}

		const instance = new MyClass();
		// @ts-expect-error
		const updated = instance.$update({ x: 2 });

		expect(updated).not.toBe(instance);
		expect(updated).toEqual({ x: 1 });
	});

	test('`$update` throws error for classes with more than one argument', ({
		expect,
	}) => {
		class MyClass extends Strukt.init({
			constructor(x: number, y: number) {
				return { x, y };
			},
		}) {}

		const instance = new MyClass(1, 2);
		expect(() => instance.$update(1)).toThrow(
			Strukt.Errors.UpdateArgsLengthError,
		);
	});
});
