[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [Errors](../README.md) / EnumAssertionError

# Class: EnumAssertionError

Defined in: [src/Enum.ts:106](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L106)

## Extends

- [`ErrorStruktBase`](../../Error/classes/ErrorStruktBase.md)\<`this`\> & `object`

## Constructors

### new EnumAssertionError()

> **new EnumAssertionError**(`args`, `meta`?): [`EnumAssertionError`](EnumAssertionError.md)

Defined in: [src/Error.ts:87](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Error.ts#L87)

#### Parameters

##### args

###### expected

[`enumValue`](../../Enum/type-aliases/enumValue.md)[]

###### target

`unknown`

##### meta?

[`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Returns

[`EnumAssertionError`](EnumAssertionError.md)

#### Inherited from

`` Err.init({ 	constructor(params: { target: unknown; expected: enumValue[] }) { 		const { target, expected } = params; 		const data = { target, expected }; 		const message = `Invalid enum value: ${target}. Expected one of: ${expected.join( 			', ', 		)}`; 		return { 			message, 			data, 		}; 	}, }).constructor ``

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`` Err.init({ 	constructor(params: { target: unknown; expected: enumValue[] }) { 		const { target, expected } = params; 		const data = { target, expected }; 		const message = `Invalid enum value: ${target}. Expected one of: ${expected.join( 			', ', 		)}`; 		return { 			message, 			data, 		}; 	}, }).cause ``

***

### data

> **data**: `object`

Defined in: [src/Error.ts:81](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Error.ts#L81)

#### expected

> **expected**: [`enumValue`](../../Enum/type-aliases/enumValue.md)[]

#### target

> **target**: `unknown`

#### Inherited from

`` Err.init({ 	constructor(params: { target: unknown; expected: enumValue[] }) { 		const { target, expected } = params; 		const data = { target, expected }; 		const message = `Invalid enum value: ${target}. Expected one of: ${expected.join( 			', ', 		)}`; 		return { 			message, 			data, 		}; 	}, }).data ``

***

### message

> **message**: `string`

Defined in: [src/Error.ts:12](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Error.ts#L12)

#### Inherited from

`` Err.init({ 	constructor(params: { target: unknown; expected: enumValue[] }) { 		const { target, expected } = params; 		const data = { target, expected }; 		const message = `Invalid enum value: ${target}. Expected one of: ${expected.join( 			', ', 		)}`; 		return { 			message, 			data, 		}; 	}, }).message ``

***

### meta

> `readonly` **meta**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

Defined in: [src/Error.ts:13](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Error.ts#L13)

#### Inherited from

`` Err.init({ 	constructor(params: { target: unknown; expected: enumValue[] }) { 		const { target, expected } = params; 		const data = { target, expected }; 		const message = `Invalid enum value: ${target}. Expected one of: ${expected.join( 			', ', 		)}`; 		return { 			message, 			data, 		}; 	}, }).meta ``

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`` Err.init({ 	constructor(params: { target: unknown; expected: enumValue[] }) { 		const { target, expected } = params; 		const data = { target, expected }; 		const message = `Invalid enum value: ${target}. Expected one of: ${expected.join( 			', ', 		)}`; 		return { 			message, 			data, 		}; 	}, }).name ``

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`` Err.init({ 	constructor(params: { target: unknown; expected: enumValue[] }) { 		const { target, expected } = params; 		const data = { target, expected }; 		const message = `Invalid enum value: ${target}. Expected one of: ${expected.join( 			', ', 		)}`; 		return { 			message, 			data, 		}; 	}, }).stack ``
