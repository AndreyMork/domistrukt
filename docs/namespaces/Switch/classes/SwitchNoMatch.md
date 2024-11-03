[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Switch](../README.md) / SwitchNoMatch

# Class: SwitchNoMatch

## Extends

- [`ErrorStruktBase`](../../Error/classes/ErrorStruktBase.md)\<`this`\> & `object`

## Constructors

### new SwitchNoMatch()

> **new SwitchNoMatch**(`args`, `meta`?): [`SwitchNoMatch`](SwitchNoMatch.md)

#### Parameters

• **args**: `any`

• **meta?**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Returns

[`SwitchNoMatch`](SwitchNoMatch.md)

#### Inherited from

Err.init(\{
	constructor(value: any) \{
		return \{
			data: \{ value \},
			message: \`No match found and no default provided for $\{value\}\`,
		\};
	\},
\}).constructor

#### Defined in

[src/Error.ts:87](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Error.ts#L87)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

Err.init(\{
	constructor(value: any) \{
		return \{
			data: \{ value \},
			message: \`No match found and no default provided for $\{value\}\`,
		\};
	\},
\}).cause

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### data

> **data**: `object`

#### value

> **value**: `any`

#### Inherited from

Err.init(\{
	constructor(value: any) \{
		return \{
			data: \{ value \},
			message: \`No match found and no default provided for $\{value\}\`,
		\};
	\},
\}).data

#### Defined in

[src/Error.ts:81](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Error.ts#L81)

***

### message

> **message**: `string`

#### Inherited from

Err.init(\{
	constructor(value: any) \{
		return \{
			data: \{ value \},
			message: \`No match found and no default provided for $\{value\}\`,
		\};
	\},
\}).message

#### Defined in

[src/Error.ts:12](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Error.ts#L12)

***

### meta

> `readonly` **meta**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Inherited from

Err.init(\{
	constructor(value: any) \{
		return \{
			data: \{ value \},
			message: \`No match found and no default provided for $\{value\}\`,
		\};
	\},
\}).meta

#### Defined in

[src/Error.ts:13](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Error.ts#L13)

***

### name

> **name**: `string`

#### Inherited from

Err.init(\{
	constructor(value: any) \{
		return \{
			data: \{ value \},
			message: \`No match found and no default provided for $\{value\}\`,
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
	constructor(value: any) \{
		return \{
			data: \{ value \},
			message: \`No match found and no default provided for $\{value\}\`,
		\};
	\},
\}).stack

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1078
