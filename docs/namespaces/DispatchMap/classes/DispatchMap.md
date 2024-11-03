[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [DispatchMap](../README.md) / DispatchMap

# Class: DispatchMap\<shape\>

## Type Parameters

• **shape** *extends* [`mapShape`](../type-aliases/mapShape.md)

## Constructors

### new DispatchMap()

> **new DispatchMap**\<`shape`\>(`shape`): [`DispatchMap`](DispatchMap.md)\<`shape`\>

#### Parameters

• **shape**: `shape`

#### Returns

[`DispatchMap`](DispatchMap.md)\<`shape`\>

#### Defined in

[src/DispatchMap.ts:14](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L14)

## Accessors

### $$key

#### Get Signature

> **get** **$$key**(): keyof `shape`

##### Returns

keyof `shape`

#### Defined in

[src/DispatchMap.ts:22](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L22)

***

### $$value

#### Get Signature

> **get** **$$value**(): `shape`\[keyof `shape`\]

##### Returns

`shape`\[keyof `shape`\]

#### Defined in

[src/DispatchMap.ts:26](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L26)

***

### shape

#### Get Signature

> **get** **shape**(): `shape`

##### Returns

`shape`

#### Defined in

[src/DispatchMap.ts:18](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L18)

## Methods

### entries()

> **entries**(): `object`[]

#### Returns

`object`[]

#### Defined in

[src/DispatchMap.ts:42](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L42)

***

### get()

> **get**\<`key`\>(`key`): `shape`\[`key`\]

#### Type Parameters

• **key** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **key**: `key`

#### Returns

`shape`\[`key`\]

#### Defined in

[src/DispatchMap.ts:49](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L49)

***

### getSafe()

> **getSafe**\<`key`, `notSetValue`\>(`key`, `notSetValue`?): `notSetValue` \| `shape`\[`key`\]

#### Type Parameters

• **key** *extends* `string` \| `number` \| `symbol`

• **notSetValue** = `undefined`

#### Parameters

• **key**: `key`

• **notSetValue?**: `notSetValue`

#### Returns

`notSetValue` \| `shape`\[`key`\]

#### Defined in

[src/DispatchMap.ts:57](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L57)

***

### has()

> **has**(`key`): `key is keyof shape`

#### Parameters

• **key**: `unknown`

#### Returns

`key is keyof shape`

#### Defined in

[src/DispatchMap.ts:30](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L30)

***

### index()

> **index**(`key`): `shape`\[keyof `shape`\]

#### Parameters

• **key**: `PropertyKey`

#### Returns

`shape`\[keyof `shape`\]

#### Defined in

[src/DispatchMap.ts:68](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L68)

***

### indexSafe()

> **indexSafe**\<`notSetValue`\>(`key`, `notSetValue`?): `shape`\[keyof `shape`\] \| `notSetValue`

#### Type Parameters

• **notSetValue** = `undefined`

#### Parameters

• **key**: `PropertyKey`

• **notSetValue?**: `notSetValue`

#### Returns

`shape`\[keyof `shape`\] \| `notSetValue`

#### Defined in

[src/DispatchMap.ts:72](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L72)

***

### keys()

> **keys**(): keyof `shape`[]

#### Returns

keyof `shape`[]

#### Defined in

[src/DispatchMap.ts:34](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L34)

***

### values()

> **values**(): `shape`\[keyof `shape`\][]

#### Returns

`shape`\[keyof `shape`\][]

#### Defined in

[src/DispatchMap.ts:38](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/DispatchMap.ts#L38)
