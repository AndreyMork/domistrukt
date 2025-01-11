[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [Errors](../README.md) / DispatchMapKeyNotFound

# Class: DispatchMapKeyNotFound

Defined in: [src/DispatchMap.ts:126](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L126)

## Extends

- [`ErrorStruktBase`](../../Error/classes/ErrorStruktBase.md)\<`this`\> & `object`

## Constructors

### new DispatchMapKeyNotFound()

> **new DispatchMapKeyNotFound**(`args`, `meta`?): [`DispatchMapKeyNotFound`](DispatchMapKeyNotFound.md)

Defined in: [src/Error.ts:87](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Error.ts#L87)

#### Parameters

##### args

###### key

`unknown`

###### map

[`DispatchMap`](../../DispatchMap/classes/DispatchMap.md)\<`any`\>

##### meta?

[`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Returns

[`DispatchMapKeyNotFound`](DispatchMapKeyNotFound.md)

#### Inherited from

`` Err.init({ 	constructor(params: { key: unknown; map: DispatchMap<any> }) { 		const { key, map } = params; 		const keys = map.keys(); 		const data = { 			key, 			map, 			keys, 		}; 		const keysString = keys.join(', '); 		const message = `Key not found: ${key}. Available keys: ${keysString}`; 		return { 			data, 			message, 		}; 	}, }).constructor ``

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`` Err.init({ 	constructor(params: { key: unknown; map: DispatchMap<any> }) { 		const { key, map } = params; 		const keys = map.keys(); 		const data = { 			key, 			map, 			keys, 		}; 		const keysString = keys.join(', '); 		const message = `Key not found: ${key}. Available keys: ${keysString}`; 		return { 			data, 			message, 		}; 	}, }).cause ``

***

### data

> **data**: `object`

Defined in: [src/Error.ts:81](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Error.ts#L81)

#### key

> **key**: `unknown`

#### keys

> **keys**: (`string` \| `number` \| `symbol`)[]

#### map

> **map**: [`DispatchMap`](../../DispatchMap/classes/DispatchMap.md)\<`any`\>

#### Inherited from

`` Err.init({ 	constructor(params: { key: unknown; map: DispatchMap<any> }) { 		const { key, map } = params; 		const keys = map.keys(); 		const data = { 			key, 			map, 			keys, 		}; 		const keysString = keys.join(', '); 		const message = `Key not found: ${key}. Available keys: ${keysString}`; 		return { 			data, 			message, 		}; 	}, }).data ``

***

### message

> **message**: `string`

Defined in: [src/Error.ts:12](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Error.ts#L12)

#### Inherited from

`` Err.init({ 	constructor(params: { key: unknown; map: DispatchMap<any> }) { 		const { key, map } = params; 		const keys = map.keys(); 		const data = { 			key, 			map, 			keys, 		}; 		const keysString = keys.join(', '); 		const message = `Key not found: ${key}. Available keys: ${keysString}`; 		return { 			data, 			message, 		}; 	}, }).message ``

***

### meta

> `readonly` **meta**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

Defined in: [src/Error.ts:13](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Error.ts#L13)

#### Inherited from

`` Err.init({ 	constructor(params: { key: unknown; map: DispatchMap<any> }) { 		const { key, map } = params; 		const keys = map.keys(); 		const data = { 			key, 			map, 			keys, 		}; 		const keysString = keys.join(', '); 		const message = `Key not found: ${key}. Available keys: ${keysString}`; 		return { 			data, 			message, 		}; 	}, }).meta ``

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`` Err.init({ 	constructor(params: { key: unknown; map: DispatchMap<any> }) { 		const { key, map } = params; 		const keys = map.keys(); 		const data = { 			key, 			map, 			keys, 		}; 		const keysString = keys.join(', '); 		const message = `Key not found: ${key}. Available keys: ${keysString}`; 		return { 			data, 			message, 		}; 	}, }).name ``

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`` Err.init({ 	constructor(params: { key: unknown; map: DispatchMap<any> }) { 		const { key, map } = params; 		const keys = map.keys(); 		const data = { 			key, 			map, 			keys, 		}; 		const keysString = keys.join(', '); 		const message = `Key not found: ${key}. Available keys: ${keysString}`; 		return { 			data, 			message, 		}; 	}, }).stack ``
