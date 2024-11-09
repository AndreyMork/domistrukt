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

		const keysString = keys.join(', ');
		const message = \`Key not found: $\{key\}. Available keys: $\{keysString\}\`;

		return \{
			data,
			message,
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
	constructor(params: \{ key: unknown; map: DispatchMap\<any\> \}) \{
		const \{ key, map \} = params;
		const keys = map.keys();

		const data = \{
			key,
			map,
			keys,
		\};

		const keysString = keys.join(', ');
		const message = \`Key not found: $\{key\}. Available keys: $\{keysString\}\`;

		return \{
			data,
			message,
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

		const keysString = keys.join(', ');
		const message = \`Key not found: $\{key\}. Available keys: $\{keysString\}\`;

		return \{
			data,
			message,
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
	constructor(params: \{ key: unknown; map: DispatchMap\<any\> \}) \{
		const \{ key, map \} = params;
		const keys = map.keys();

		const data = \{
			key,
			map,
			keys,
		\};

		const keysString = keys.join(', ');
		const message = \`Key not found: $\{key\}. Available keys: $\{keysString\}\`;

		return \{
			data,
			message,
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
	constructor(params: \{ key: unknown; map: DispatchMap\<any\> \}) \{
		const \{ key, map \} = params;
		const keys = map.keys();

		const data = \{
			key,
			map,
			keys,
		\};

		const keysString = keys.join(', ');
		const message = \`Key not found: $\{key\}. Available keys: $\{keysString\}\`;

		return \{
			data,
			message,
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
	constructor(params: \{ key: unknown; map: DispatchMap\<any\> \}) \{
		const \{ key, map \} = params;
		const keys = map.keys();

		const data = \{
			key,
			map,
			keys,
		\};

		const keysString = keys.join(', ');
		const message = \`Key not found: $\{key\}. Available keys: $\{keysString\}\`;

		return \{
			data,
			message,
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

		const keysString = keys.join(', ');
		const message = \`Key not found: $\{key\}. Available keys: $\{keysString\}\`;

		return \{
			data,
			message,
		\};
	\},
\}).stack

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1078
