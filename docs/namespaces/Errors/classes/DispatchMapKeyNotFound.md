[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Errors](../README.md) / DispatchMapKeyNotFound

# Class: DispatchMapKeyNotFound

## Extends

- [`ErrorStruktBase`](../../Error/classes/ErrorStruktBase.md)\<`this`\> & `object`

## Constructors

### new DispatchMapKeyNotFound()

> **new DispatchMapKeyNotFound**(`args`, `meta`?): [`DispatchMapKeyNotFound`](DispatchMapKeyNotFound.md)

#### Parameters

• **args**

• **args.key**: `unknown`

• **args.map?**: [`DispatchMap`](../../DispatchMap/classes/DispatchMap.md)\<`any`\>

• **meta?**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Returns

[`DispatchMapKeyNotFound`](DispatchMapKeyNotFound.md)

#### Inherited from

Err.init(\{
	constructor(params: \{ key: unknown; map: DispatchMap\<any\> \}) \{
		const \{ key, map \} = params;
		const keys = map.keys();

		const data = \{
			key,
			map,
			keys,
		\};

		return \{
			data,
			message: \`DispatchMap key not found: $\{key\}. Available keys: $\{keys.join(
				', ',
			)\}\`,
		\};
	\},
\}).constructor

#### Defined in

[src/Error.ts:87](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/Error.ts#L87)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

Err.init(\{
	constructor(params: \{ key: unknown; map: DispatchMap\<any\> \}) \{
		const \{ key, map \} = params;
		const keys = map.keys();

		const data = \{
			key,
			map,
			keys,
		\};

		return \{
			data,
			message: \`DispatchMap key not found: $\{key\}. Available keys: $\{keys.join(
				', ',
			)\}\`,
		\};
	\},
\}).cause

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### data

> **data**: `object`

#### key

> **key**: `unknown`

#### keys

> **keys**: (`string` \| `number` \| `symbol`)[]

#### map

> **map**: [`DispatchMap`](../../DispatchMap/classes/DispatchMap.md)\<`any`\>

#### Inherited from

Err.init(\{
	constructor(params: \{ key: unknown; map: DispatchMap\<any\> \}) \{
		const \{ key, map \} = params;
		const keys = map.keys();

		const data = \{
			key,
			map,
			keys,
		\};

		return \{
			data,
			message: \`DispatchMap key not found: $\{key\}. Available keys: $\{keys.join(
				', ',
			)\}\`,
		\};
	\},
\}).data

#### Defined in

[src/Error.ts:81](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/Error.ts#L81)

***

### message

> **message**: `string`

#### Inherited from

Err.init(\{
	constructor(params: \{ key: unknown; map: DispatchMap\<any\> \}) \{
		const \{ key, map \} = params;
		const keys = map.keys();

		const data = \{
			key,
			map,
			keys,
		\};

		return \{
			data,
			message: \`DispatchMap key not found: $\{key\}. Available keys: $\{keys.join(
				', ',
			)\}\`,
		\};
	\},
\}).message

#### Defined in

[src/Error.ts:12](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/Error.ts#L12)

***

### meta

> `readonly` **meta**: [`errorMeta`](../../Error/type-aliases/errorMeta.md)

#### Inherited from

Err.init(\{
	constructor(params: \{ key: unknown; map: DispatchMap\<any\> \}) \{
		const \{ key, map \} = params;
		const keys = map.keys();

		const data = \{
			key,
			map,
			keys,
		\};

		return \{
			data,
			message: \`DispatchMap key not found: $\{key\}. Available keys: $\{keys.join(
				', ',
			)\}\`,
		\};
	\},
\}).meta

#### Defined in

[src/Error.ts:13](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/Error.ts#L13)

***

### name

> **name**: `string`

#### Inherited from

Err.init(\{
	constructor(params: \{ key: unknown; map: DispatchMap\<any\> \}) \{
		const \{ key, map \} = params;
		const keys = map.keys();

		const data = \{
			key,
			map,
			keys,
		\};

		return \{
			data,
			message: \`DispatchMap key not found: $\{key\}. Available keys: $\{keys.join(
				', ',
			)\}\`,
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
	constructor(params: \{ key: unknown; map: DispatchMap\<any\> \}) \{
		const \{ key, map \} = params;
		const keys = map.keys();

		const data = \{
			key,
			map,
			keys,
		\};

		return \{
			data,
			message: \`DispatchMap key not found: $\{key\}. Available keys: $\{keys.join(
				', ',
			)\}\`,
		\};
	\},
\}).stack

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1078
