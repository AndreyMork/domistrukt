[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Errors](../README.md) / EnumAssertionError

# Class: EnumAssertionError

## Extends

- [`ErrorStruktBase`](../../Error/classes/ErrorStruktBase.md)\<`this`\> & `object`

## Constructors

### new EnumAssertionError()

> **new EnumAssertionError**(`args`, `meta`?): [`EnumAssertionError`](EnumAssertionError.md)

#### Parameters

• **args**

• **args.expected**: [`enumValue`](../../Enum/type-aliases/enumValue.md)[]

• **args.target?**: `unknown`

• **meta?**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Returns

[`EnumAssertionError`](EnumAssertionError.md)

#### Inherited from

Err.init(\{
	constructor(params: \{ target: unknown; expected: enumValue\[\] \}) \{
		const \{ target, expected \} = params;
		const data = \{ target, expected \};

		const message = \`Invalid enum value: $\{target\}. Expected one of: $\{expected.join(
			', ',
		)\}\`;

		return \{
			message,
			data,
		\};
	\},
\}).constructor

#### Defined in

[src/Error.ts:87](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Error.ts#L87)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

Err.init(\{
	constructor(params: \{ target: unknown; expected: enumValue\[\] \}) \{
		const \{ target, expected \} = params;
		const data = \{ target, expected \};

		const message = \`Invalid enum value: $\{target\}. Expected one of: $\{expected.join(
			', ',
		)\}\`;

		return \{
			message,
			data,
		\};
	\},
\}).cause

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### data

> **data**: `object`

#### expected

> **expected**: [`enumValue`](../../Enum/type-aliases/enumValue.md)[]

#### target

> **target**: `unknown`

#### Inherited from

Err.init(\{
	constructor(params: \{ target: unknown; expected: enumValue\[\] \}) \{
		const \{ target, expected \} = params;
		const data = \{ target, expected \};

		const message = \`Invalid enum value: $\{target\}. Expected one of: $\{expected.join(
			', ',
		)\}\`;

		return \{
			message,
			data,
		\};
	\},
\}).data

#### Defined in

[src/Error.ts:81](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Error.ts#L81)

***

### message

> **message**: `string`

#### Inherited from

Err.init(\{
	constructor(params: \{ target: unknown; expected: enumValue\[\] \}) \{
		const \{ target, expected \} = params;
		const data = \{ target, expected \};

		const message = \`Invalid enum value: $\{target\}. Expected one of: $\{expected.join(
			', ',
		)\}\`;

		return \{
			message,
			data,
		\};
	\},
\}).message

#### Defined in

[src/Error.ts:12](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Error.ts#L12)

***

### meta

> `readonly` **meta**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Inherited from

Err.init(\{
	constructor(params: \{ target: unknown; expected: enumValue\[\] \}) \{
		const \{ target, expected \} = params;
		const data = \{ target, expected \};

		const message = \`Invalid enum value: $\{target\}. Expected one of: $\{expected.join(
			', ',
		)\}\`;

		return \{
			message,
			data,
		\};
	\},
\}).meta

#### Defined in

[src/Error.ts:13](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Error.ts#L13)

***

### name

> **name**: `string`

#### Inherited from

Err.init(\{
	constructor(params: \{ target: unknown; expected: enumValue\[\] \}) \{
		const \{ target, expected \} = params;
		const data = \{ target, expected \};

		const message = \`Invalid enum value: $\{target\}. Expected one of: $\{expected.join(
			', ',
		)\}\`;

		return \{
			message,
			data,
		\};
	\},
\}).name

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

Err.init(\{
	constructor(params: \{ target: unknown; expected: enumValue\[\] \}) \{
		const \{ target, expected \} = params;
		const data = \{ target, expected \};

		const message = \`Invalid enum value: $\{target\}. Expected one of: $\{expected.join(
			', ',
		)\}\`;

		return \{
			message,
			data,
		\};
	\},
\}).stack

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1078
