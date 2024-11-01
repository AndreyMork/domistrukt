import * as Japa from '@japa/runner';

import * as Strukt from '#Main';

const test = Japa.test;

test.group('Strukt/Error: ErrorStruktBase', () => {
	test('should be instance of `Error`', ({ expect }) => {
		class MyError extends Strukt.staticError() {}
		const error = new MyError();
		expect(error).toBeInstanceOf(Error);
		expect(error).toBeInstanceOf(Strukt.Error.ErrorStruktBase);
	});

	test('should set `meta` property correctly', ({ expect }) => {
		const meta = { annotation: 'test', annotation2: 'test2' };
		class MyError extends Strukt.staticError() {}
		const error = new MyError(meta);
		expect(error).toHaveProperty('meta', meta);
	});

	test('should set `cause` property correctly', ({ expect }) => {
		const cause = new Error('Original error');
		class MyError extends Strukt.staticError() {}
		const error = new MyError({ cause });

		expect(error).toHaveProperty('cause', cause);
		expect(error.cause).toBe(cause);
		expect(error.meta).not.toHaveProperty('cause');

		class MyError2 extends Strukt.staticError() {}
		const error2 = new MyError2();
		expect(error2).not.toHaveProperty('cause');
	});

	test('should set `message` property correctly', ({ expect }) => {
		const message = 'Error message';
		class MyError extends Strukt.staticError({ message }) {}
		const error = new MyError();
		expect(error).toHaveProperty('message', message);
	});

	test('`meta` should override `message`', ({ expect }) => {
		const message = 'Error message';
		class MyError extends Strukt.staticError({ message }) {}
		const messageOverride = 'Message override';
		const error = new MyError({ message: messageOverride });
		expect(error).toHaveProperty('message', messageOverride);
	});

	test('should accept `meta` when message provided', ({ expect }) => {
		class MyError extends Strukt.staticError() {}
		const message = 'Error message';
		const meta = { value: 'abc' };
		const error = new MyError(message, meta);
		expect(error).toHaveProperty('message', message);
		expect(error).toHaveProperty('meta', meta);
	});

	test('should have correct types', ({ expectTypeOf }) => {
		class MyError extends Strukt.staticError() {}
		const error = new MyError();
		expectTypeOf(error.message).toBeString();
		expectTypeOf(error.cause).toBeUnknown();
		expectTypeOf(error.meta).toBeObject();

		expectTypeOf(MyError).constructorParameters.toEqualTypeOf<
			[] | [message: string, meta?: Strukt.Error.errorMeta | undefined]
		>();
	});
});

test.group('Strukt/Error', () => {
	test('should be instance of `Error`', ({ expect }) => {
		class MyError extends Strukt.error({
			constructor() {
				return {};
			},
		}) {}
		const error = new MyError();
		expect(error).toBeInstanceOf(Error);
		expect(error).toBeInstanceOf(Strukt.Error.ErrorStruktBase);
	});

	test('`constructor` should work correctly', ({ expect }) => {
		type input = { value: number };

		class MyError extends Strukt.error({
			constructor(input: input) {
				return {
					data: {
						value: input.value,
						isEven: input.value % 2 === 0,
					},
				};
			},
		}) {}

		const inputData = { value: 42 };
		const error = new MyError(inputData);
		expect(error).toHaveProperty('data', {
			value: 42,
			isEven: true,
		});
	});

	test('should set `meta` property correctly', ({ expect }) => {
		const meta = { annotation: 'test', annotation2: 'test2' };
		class MyError extends Strukt.error({
			constructor() {
				return {};
			},
		}) {}
		const error = new MyError(undefined, meta);
		expect(error).toHaveProperty('meta', meta);
	});

	test('should set `cause` property correctly', ({ expect }) => {
		const cause = new Error('Original error');
		class MyError extends Strukt.error({
			constructor() {
				return {};
			},
		}) {}
		const error = new MyError(undefined, { cause });

		expect(error).toHaveProperty('cause', cause);
		expect(error.cause).toBe(cause);
		expect(error.meta).not.toHaveProperty('cause');

		class MyError2 extends Strukt.error({
			constructor() {
				return {};
			},
		}) {}
		const error2 = new MyError2(undefined);
		expect(error2).not.toHaveProperty('cause');
	});

	test('should set `message` property correctly', ({ expect }) => {
		const message = 'Error message';
		class MyError extends Strukt.error({
			constructor() {
				return { message };
			},
		}) {}
		const error = new MyError(undefined);
		expect(error).toHaveProperty('message', message);
	});

	test('`meta` should override `message`', ({ expect }) => {
		const message = 'Error message';
		class MyError extends Strukt.error({
			constructor() {
				return { message };
			},
		}) {}
		const messageOverride = 'Message override';
		const error = new MyError(undefined, { message: messageOverride });
		expect(error).toHaveProperty('message', messageOverride);
	});

	test('should have correct types for defined input', ({ expectTypeOf }) => {
		type data = { value: number };

		class MyError extends Strukt.error({
			constructor(data: data) {
				return { data };
			},
		}) {}
		const error = new MyError({ value: 1 });
		expectTypeOf(error.message).toBeString();
		expectTypeOf(error.cause).toBeUnknown();
		expectTypeOf(error.meta).toBeObject();
		expectTypeOf(error.data).toEqualTypeOf<data>();

		expectTypeOf(MyError).constructorParameters.toEqualTypeOf<
			[data: data, meta?: Strukt.Error.errorMeta]
		>();

		expectTypeOf(MyError).constructorParameters.not.toEqualTypeOf<
			[data?: data, meta?: Strukt.Error.errorMeta]
		>();
	});

	test('should have correct types for undefined input', ({ expectTypeOf }) => {
		class MyError extends Strukt.error({
			constructor() {
				return {};
			},
		}) {}
		const error = new MyError();
		expectTypeOf(error.data).toBeUnknown();

		expectTypeOf(MyError).constructorParameters.toEqualTypeOf<
			[data?: undefined, meta?: Strukt.Error.errorMeta] | []
		>();

		class MyError2 extends Strukt.error({
			constructor() {
				return { data: 1 };
			},
		}) {}
		const error2 = new MyError2();
		expectTypeOf(error2.data).toBeNumber();

		expectTypeOf(MyError2).constructorParameters.toEqualTypeOf<
			[data?: undefined, meta?: Strukt.Error.errorMeta] | []
		>();

		expectTypeOf(MyError2).constructorParameters.not.toEqualTypeOf<
			[data: number, meta?: Strukt.Error.errorMeta]
		>();
	});
});

test.group('Strukt/Error: helpers', () => {
	test('`isErrorStrukt` should work correctly', ({ expect }) => {
		class MyError extends Strukt.error({
			constructor() {
				return {};
			},
		}) {}

		expect(Strukt.isErrorStrukt(new MyError())).toBe(true);
	});
});
