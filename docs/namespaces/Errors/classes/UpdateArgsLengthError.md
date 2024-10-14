[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Errors](../README.md) / UpdateArgsLengthError

# Class: UpdateArgsLengthError

Error thrown when the number of arguments is incorrect for an update.

## Extends

- [`StruktErrorBase`](../../Error/classes/StruktErrorBase.md)\<`this`\> & `object`

## Constructors

### new UpdateArgsLengthError()

> **new UpdateArgsLengthError**(`args`, `meta`?): [`UpdateArgsLengthError`](UpdateArgsLengthError.md)

#### Parameters

• **args**: `number`

• **meta?**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Returns

[`UpdateArgsLengthError`](UpdateArgsLengthError.md)

#### Inherited from

Err.init(\{
	constructor(argsLen: number) \{
		return \{
			message: \`Update is only for classes with one argument, but this class has $\{argsLen\} arguments\`,
			data: \{
				argsLen,
			\},
		\};
	\},
\}).constructor

#### Defined in

[src/Error.ts:87](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Error.ts#L87)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

Err.init(\{
	constructor(argsLen: number) \{
		return \{
			message: \`Update is only for classes with one argument, but this class has $\{argsLen\} arguments\`,
			data: \{
				argsLen,
			\},
		\};
	\},
\}).cause

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### data

> **data**: `object`

#### argsLen

> **argsLen**: `number`

#### Inherited from

Err.init(\{
	constructor(argsLen: number) \{
		return \{
			message: \`Update is only for classes with one argument, but this class has $\{argsLen\} arguments\`,
			data: \{
				argsLen,
			\},
		\};
	\},
\}).data

#### Defined in

[src/Error.ts:81](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Error.ts#L81)

***

### message

> **message**: `string`

#### Inherited from

Err.init(\{
	constructor(argsLen: number) \{
		return \{
			message: \`Update is only for classes with one argument, but this class has $\{argsLen\} arguments\`,
			data: \{
				argsLen,
			\},
		\};
	\},
\}).message

#### Defined in

[src/Error.ts:12](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Error.ts#L12)

***

### meta

> `readonly` **meta**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Inherited from

Err.init(\{
	constructor(argsLen: number) \{
		return \{
			message: \`Update is only for classes with one argument, but this class has $\{argsLen\} arguments\`,
			data: \{
				argsLen,
			\},
		\};
	\},
\}).meta

#### Defined in

[src/Error.ts:13](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Error.ts#L13)

***

### name

> **name**: `string`

#### Inherited from

Err.init(\{
	constructor(argsLen: number) \{
		return \{
			message: \`Update is only for classes with one argument, but this class has $\{argsLen\} arguments\`,
			data: \{
				argsLen,
			\},
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
	constructor(argsLen: number) \{
		return \{
			message: \`Update is only for classes with one argument, but this class has $\{argsLen\} arguments\`,
			data: \{
				argsLen,
			\},
		\};
	\},
\}).stack

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1078
