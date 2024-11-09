[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [DispatchMap](../README.md) / DispatchMapSearchFailed

# Class: DispatchMapSearchFailed

## Extends

- [`ErrorStruktBase`](../../Error/classes/ErrorStruktBase.md)\<`this`\> & `object`

## Constructors

### new DispatchMapSearchFailed()

> **new DispatchMapSearchFailed**(`args`, `meta`?): [`DispatchMapSearchFailed`](DispatchMapSearchFailed.md)

#### Parameters

• **args**

• **args.map**: [`DispatchMap`](DispatchMap.md)\<`any`\>

• **meta?**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Returns

[`DispatchMapSearchFailed`](DispatchMapSearchFailed.md)

#### Inherited from

`Err.init({
	constructor(params: { map: DispatchMap<any> }) {
		const { map } = params;

		const data = {
			map,
		};

		const message = 'Search failed';
		return {
			data,
			message,
		};
	},
}).constructor`

#### Defined in

[src/Error.ts:87](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Error.ts#L87)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Err.init({
	constructor(params: { map: DispatchMap<any> }) {
		const { map } = params;

		const data = {
			map,
		};

		const message = 'Search failed';
		return {
			data,
			message,
		};
	},
}).cause`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### data

> **data**: `object`

#### map

> **map**: [`DispatchMap`](DispatchMap.md)\<`any`\>

#### Inherited from

`Err.init({
	constructor(params: { map: DispatchMap<any> }) {
		const { map } = params;

		const data = {
			map,
		};

		const message = 'Search failed';
		return {
			data,
			message,
		};
	},
}).data`

#### Defined in

[src/Error.ts:81](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Error.ts#L81)

***

### message

> **message**: `string`

#### Inherited from

`Err.init({
	constructor(params: { map: DispatchMap<any> }) {
		const { map } = params;

		const data = {
			map,
		};

		const message = 'Search failed';
		return {
			data,
			message,
		};
	},
}).message`

#### Defined in

[src/Error.ts:12](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Error.ts#L12)

***

### meta

> `readonly` **meta**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Inherited from

`Err.init({
	constructor(params: { map: DispatchMap<any> }) {
		const { map } = params;

		const data = {
			map,
		};

		const message = 'Search failed';
		return {
			data,
			message,
		};
	},
}).meta`

#### Defined in

[src/Error.ts:13](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Error.ts#L13)

***

### name

> **name**: `string`

#### Inherited from

`Err.init({
	constructor(params: { map: DispatchMap<any> }) {
		const { map } = params;

		const data = {
			map,
		};

		const message = 'Search failed';
		return {
			data,
			message,
		};
	},
}).name`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Err.init({
	constructor(params: { map: DispatchMap<any> }) {
		const { map } = params;

		const data = {
			map,
		};

		const message = 'Search failed';
		return {
			data,
			message,
		};
	},
}).stack`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1078
