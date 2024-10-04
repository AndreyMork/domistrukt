import * as Japa from '@japa/runner';

import * as Strukt from '#Main';

const test = Japa.test;

test.group('Strukt.StaticError', () => {
	test('should be instance of `Error`', ({ expect }) => {
		class MyError extends Strukt.staticError() {}
		const error = new MyError();
		expect(error).toBeInstanceOf(Error);
		expect(error).toBeInstanceOf(Strukt.Err.StruktErrorBase);
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

	test('`params.message` should handle message building from `data`', ({
		expect,
	}) => {
		const messageFn = () => `Error: ${Math.random()}`;
		class MyError extends Strukt.staticError({
			message: messageFn,
		}) {}

		const error1 = new MyError();
		const error2 = new MyError();
		expect(error1.message).not.toBe(error2.message);
	});

	test('should have correct types', ({ expectTypeOf }) => {
		class MyError extends Strukt.staticError() {}
		const error = new MyError();
		expectTypeOf(error.message).toBeString();
		expectTypeOf(error.cause).toBeUnknown();
		expectTypeOf(error.meta).toBeObject();

		expectTypeOf(MyError).constructorParameters.toEqualTypeOf<
			[meta?: Strukt.Err.errorMeta] | []
		>();
	});
});

test.group('Strukt.Error', () => {
	test('should be instance of `Error`', ({ expect }) => {
		class MyError extends Strukt.error<any>() {}
		const error = new MyError({});
		expect(error).toBeInstanceOf(Error);
		expect(error).toBeInstanceOf(Strukt.Err.StruktErrorBase);
	});

	test('should set `meta` property correctly', ({ expect }) => {
		const meta = { annotation: 'test', annotation2: 'test2' };
		class MyError extends Strukt.error<any>({}) {}
		const error = new MyError({}, meta);
		expect(error).toHaveProperty('meta', meta);
	});

	test('should set `cause` property correctly', ({ expect }) => {
		const cause = new Error('Original error');
		class MyError extends Strukt.error<undefined>() {}
		const error = new MyError(undefined, { cause });

		expect(error).toHaveProperty('cause', cause);
		expect(error.cause).toBe(cause);
		expect(error.meta).not.toHaveProperty('cause');

		class MyError2 extends Strukt.error<undefined>() {}
		const error2 = new MyError2(undefined);
		expect(error2).not.toHaveProperty('cause');
	});

	test('should set `message` property correctly', ({ expect }) => {
		const message = 'Error message';
		class MyError extends Strukt.error<undefined>({ message }) {}
		const error = new MyError(undefined);
		expect(error).toHaveProperty('message', message);
	});

	test('`meta` should override `message`', ({ expect }) => {
		const message = 'Error message';
		class MyError extends Strukt.error<undefined>({ message }) {}
		const messageOverride = 'Message override';
		const error = new MyError(undefined, { message: messageOverride });
		expect(error).toHaveProperty('message', messageOverride);
	});

	test('`params.message` should handle message building from `data`', ({
		expect,
	}) => {
		type data = { value: number };
		const messageFn = (input: data) => `Error: ${input.value}`;
		class MyError extends Strukt.error<data>({
			message: messageFn,
		}) {}

		const data = { value: 1 };
		const error1 = new MyError(data);
		expect(error1).toHaveProperty('message', messageFn(data));
	});

	test('`params.message` should use output data from create', ({ expect }) => {
		type input = { value: number };
		type output = {
			value: number;
			isEven: boolean;
		};
		const create = (input: input): output => ({
			value: input.value,
			isEven: input.value % 2 === 0,
		});
		const messageFn = (output: output) =>
			`${output.value} is ${output.isEven ? 'even' : 'odd'}`;

		class MyError extends Strukt.error<output, input>({
			message: messageFn,
			create,
		}) {}

		const inputData = { value: 42 };
		const error = new MyError(inputData);

		expect(error).toHaveProperty('message', '42 is even');
		expect(error.data).toEqual(create(inputData));
	});

	test('`create` should work correctly', ({ expect }) => {
		type input = { value: number };
		type output = {
			value: number;
			isEven: boolean;
		};

		class MyError extends Strukt.error<output, input>({
			create: (input: input): output => ({
				value: input.value,
				isEven: input.value % 2 === 0,
			}),
		}) {}

		const inputData = { value: 42 };
		const error = new MyError(inputData);
		expect(error).toHaveProperty('data', {
			value: 42,
			isEven: true,
		});
	});

	test('should have correct types for defined input', ({ expectTypeOf }) => {
		type data = { value: number };

		class MyError extends Strukt.error<data>() {}
		const error = new MyError({ value: 1 });
		expectTypeOf(error.message).toBeString();
		expectTypeOf(error.cause).toBeUnknown();
		expectTypeOf(error.meta).toBeObject();
		expectTypeOf(error.data).toEqualTypeOf<data>();

		expectTypeOf(MyError).constructorParameters.toEqualTypeOf<
			[data: data, meta?: Strukt.Err.errorMeta]
		>();

		expectTypeOf(MyError).constructorParameters.not.toEqualTypeOf<
			[data?: data, meta?: Strukt.Err.errorMeta]
		>();
	});

	test('should require `create` for non-matching input and output types', ({
		expectTypeOf,
	}) => {
		type input = { value: number };
		type data = { value: number; str: string };

		type parameters = Parameters<typeof Strukt.error<data, input>>[0];

		expectTypeOf<parameters>().not.toBeNullable();
		expectTypeOf<parameters['create']>().not.toBeNullable();
	});

	test('should have correct types for transformed input', ({
		expectTypeOf,
	}) => {
		type input = { value: number };
		type data = { value: number; str: string };

		class MyError extends Strukt.error<data, input>({
			create: (input: input): data => ({
				...input,
				str: input.value.toString(),
			}),
		}) {}
		const error = new MyError({ value: 1 });
		expectTypeOf(error.data).toEqualTypeOf<data>();

		expectTypeOf(MyError).constructorParameters.toEqualTypeOf<
			[data: input, meta?: Strukt.Err.errorMeta]
		>();

		expectTypeOf(MyError).constructorParameters.not.toEqualTypeOf<
			[data: data, meta?: Strukt.Err.errorMeta]
		>();
	});

	test('should infer types when `create` input equals output', ({
		expectTypeOf,
	}) => {
		type data = { value: number };

		class MyError extends Strukt.error({
			create: (input: data): data => input,
		}) {}

		const error = new MyError({ value: 1 });
		expectTypeOf(error.data).toEqualTypeOf<data>();

		expectTypeOf(MyError).constructorParameters.toEqualTypeOf<
			[data: data, meta?: Strukt.Err.errorMeta]
		>();
	});

	test('should infer types when input does not equal output', ({
		expectTypeOf,
	}) => {
		type input = { value: number };
		type data = { value: number; str: string };

		class MyError extends Strukt.error({
			create: (input: input): data => ({
				...input,
				str: input.value.toString(),
			}),
		}) {}

		const error = new MyError({ value: 1 });
		expectTypeOf(error.data).toEqualTypeOf<data>();

		expectTypeOf(MyError).constructorParameters.toEqualTypeOf<
			[data: input, meta?: Strukt.Err.errorMeta]
		>();

		expectTypeOf(MyError).constructorParameters.not.toEqualTypeOf<
			[data: data, meta?: Strukt.Err.errorMeta]
		>();
	});

	test('should have correct types for undefined input', ({ expectTypeOf }) => {
		class MyError extends Strukt.error<undefined>() {}
		const error = new MyError();
		expectTypeOf(error.data).toBeUndefined();

		expectTypeOf(MyError).constructorParameters.toEqualTypeOf<
			[data?: undefined, meta?: Strukt.Err.errorMeta] | []
		>();

		class MyError2 extends Strukt.error<number, undefined>({
			create: () => 1,
		}) {}
		const error2 = new MyError2();
		expectTypeOf(error2.data).toBeNumber();

		expectTypeOf(MyError2).constructorParameters.toEqualTypeOf<
			[data?: undefined, meta?: Strukt.Err.errorMeta] | []
		>();

		expectTypeOf(MyError2).constructorParameters.not.toEqualTypeOf<
			[data: number, meta?: Strukt.Err.errorMeta]
		>();
	});
});
