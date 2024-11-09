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

[src/DispatchMap.ts:17](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L17)

## Accessors

### $$entry

#### Get Signature

> **get** **$$entry**(): `object`

##### Returns

`object`

###### key

> **key**: keyof `shape`

###### value

> **value**: `shape`\[keyof `shape`\]

#### Defined in

[src/DispatchMap.ts:33](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L33)

***

### $$key

#### Get Signature

> **get** **$$key**(): keyof `shape`

##### Returns

keyof `shape`

#### Defined in

[src/DispatchMap.ts:25](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L25)

***

### $$value

#### Get Signature

> **get** **$$value**(): `shape`\[keyof `shape`\]

##### Returns

`shape`\[keyof `shape`\]

#### Defined in

[src/DispatchMap.ts:29](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L29)

***

### reverse

#### Get Signature

> **get** **reverse**(): [`DispatchMap`](DispatchMap.md)\<`{ [key in any]: keyof shape }`\>

##### Returns

[`DispatchMap`](DispatchMap.md)\<`{ [key in any]: keyof shape }`\>

#### Defined in

[src/DispatchMap.ts:87](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L87)

***

### shape

#### Get Signature

> **get** **shape**(): `shape`

##### Returns

`shape`

#### Defined in

[src/DispatchMap.ts:21](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L21)

## Methods

### entries()

> **entries**(): `object`[]

#### Returns

`object`[]

#### Defined in

[src/DispatchMap.ts:49](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L49)

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

[src/DispatchMap.ts:56](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L56)

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

[src/DispatchMap.ts:64](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L64)

***

### has()

> **has**(`key`): `key is keyof shape`

#### Parameters

• **key**: `unknown`

#### Returns

`key is keyof shape`

#### Defined in

[src/DispatchMap.ts:37](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L37)

***

### index()

> **index**(`key`): `shape`\[keyof `shape`\]

#### Parameters

• **key**: `PropertyKey`

#### Returns

`shape`\[keyof `shape`\]

#### Defined in

[src/DispatchMap.ts:75](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L75)

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

[src/DispatchMap.ts:79](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L79)

***

### keys()

> **keys**(): keyof `shape`[]

#### Returns

keyof `shape`[]

#### Defined in

[src/DispatchMap.ts:41](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L41)

***

### reverseFind()

> **reverseFind**(`fn`): `undefined` \| keyof `shape`

#### Parameters

• **fn**: [`findFn`](../type-aliases/findFn.md)\<`object`\>

#### Returns

`undefined` \| keyof `shape`

#### Defined in

[src/DispatchMap.ts:101](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L101)

***

### reverseFindMany()

> **reverseFindMany**(`fn`): keyof `shape`[]

#### Parameters

• **fn**: [`findFn`](../type-aliases/findFn.md)\<`object`\>

#### Returns

keyof `shape`[]

#### Defined in

[src/DispatchMap.ts:116](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L116)

***

### reverseFindOne()

> **reverseFindOne**(`fn`): keyof `shape`

#### Parameters

• **fn**: [`findFn`](../type-aliases/findFn.md)\<`object`\>

#### Returns

keyof `shape`

#### Defined in

[src/DispatchMap.ts:106](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L106)

***

### values()

> **values**(): `shape`\[keyof `shape`\][]

#### Returns

`shape`\[keyof `shape`\][]

#### Defined in

[src/DispatchMap.ts:45](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/DispatchMap.ts#L45)
