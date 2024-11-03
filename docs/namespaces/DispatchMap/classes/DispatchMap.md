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

[src/DispatchMap.ts:14](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/DispatchMap.ts#L14)

## Accessors

### $$key

#### Get Signature

> **get** **$$key**(): keyof `shape`

##### Returns

keyof `shape`

#### Defined in

[src/DispatchMap.ts:22](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/DispatchMap.ts#L22)

***

### $$value

#### Get Signature

> **get** **$$value**(): `shape`\[keyof `shape`\]

##### Returns

`shape`\[keyof `shape`\]

#### Defined in

[src/DispatchMap.ts:26](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/DispatchMap.ts#L26)

***

### shape

#### Get Signature

> **get** **shape**(): `shape`

##### Returns

`shape`

#### Defined in

[src/DispatchMap.ts:18](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/DispatchMap.ts#L18)

## Methods

### entries()

> **entries**(): `object`[]

#### Returns

`object`[]

#### Defined in

[src/DispatchMap.ts:58](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/DispatchMap.ts#L58)

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

[src/DispatchMap.ts:30](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/DispatchMap.ts#L30)

***

### getSafe()

> **getSafe**\<`key`, `notSetValue`\>(`key`, `notSetValue`): `notSetValue` \| `shape`\[`key`\]

#### Type Parameters

• **key** *extends* `string` \| `number` \| `symbol`

• **notSetValue**

#### Parameters

• **key**: `key`

• **notSetValue**: `notSetValue`

#### Returns

`notSetValue` \| `shape`\[`key`\]

#### Defined in

[src/DispatchMap.ts:38](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/DispatchMap.ts#L38)

***

### has()

> **has**(`key`): `key is keyof shape`

#### Parameters

• **key**: `unknown`

#### Returns

`key is keyof shape`

#### Defined in

[src/DispatchMap.ts:46](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/DispatchMap.ts#L46)

***

### keys()

> **keys**(): keyof `shape`[]

#### Returns

keyof `shape`[]

#### Defined in

[src/DispatchMap.ts:50](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/DispatchMap.ts#L50)

***

### values()

> **values**(): `shape`\[keyof `shape`\][]

#### Returns

`shape`\[keyof `shape`\][]

#### Defined in

[src/DispatchMap.ts:54](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/DispatchMap.ts#L54)
