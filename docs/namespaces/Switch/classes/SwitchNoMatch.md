[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [Switch](../README.md) / SwitchNoMatch

# Class: SwitchNoMatch

Defined in: [src/Switch.ts:374](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/Switch.ts#L374)

## Extends

- [`ErrorStruktBase`](../../Error/classes/ErrorStruktBase.md)\<`this`\> & `object`

## Constructors

### new SwitchNoMatch()

> **new SwitchNoMatch**(`args`, `meta`?): [`SwitchNoMatch`](SwitchNoMatch.md)

Defined in: [src/Error.ts:87](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/Error.ts#L87)

#### Parameters

##### args

`any`

##### meta?

[`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Returns

[`SwitchNoMatch`](SwitchNoMatch.md)

#### Inherited from

`` Err.init({ 	constructor(value: any) { 		return { 			data: { value }, 			message: `No match found and no default provided for ${value}`, 		}; 	}, }).constructor ``

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`` Err.init({ 	constructor(value: any) { 		return { 			data: { value }, 			message: `No match found and no default provided for ${value}`, 		}; 	}, }).cause ``

***

### data

> **data**: `object`

Defined in: [src/Error.ts:81](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/Error.ts#L81)

#### value

> **value**: `any`

#### Inherited from

`` Err.init({ 	constructor(value: any) { 		return { 			data: { value }, 			message: `No match found and no default provided for ${value}`, 		}; 	}, }).data ``

***

### message

> **message**: `string`

Defined in: [src/Error.ts:12](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/Error.ts#L12)

#### Inherited from

`` Err.init({ 	constructor(value: any) { 		return { 			data: { value }, 			message: `No match found and no default provided for ${value}`, 		}; 	}, }).message ``

***

### meta

> `readonly` **meta**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

Defined in: [src/Error.ts:13](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/Error.ts#L13)

#### Inherited from

`` Err.init({ 	constructor(value: any) { 		return { 			data: { value }, 			message: `No match found and no default provided for ${value}`, 		}; 	}, }).meta ``

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`` Err.init({ 	constructor(value: any) { 		return { 			data: { value }, 			message: `No match found and no default provided for ${value}`, 		}; 	}, }).name ``

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`` Err.init({ 	constructor(value: any) { 		return { 			data: { value }, 			message: `No match found and no default provided for ${value}`, 		}; 	}, }).stack ``
