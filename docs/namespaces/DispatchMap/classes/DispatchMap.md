[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [DispatchMap](../README.md) / DispatchMap

# Class: DispatchMap\<shape\>

Defined in: [src/DispatchMap.ts:15](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L15)

## Type Parameters

• **shape** *extends* [`mapShape`](../type-aliases/mapShape.md)

## Constructors

### new DispatchMap()

> **new DispatchMap**\<`shape`\>(`shape`): [`DispatchMap`](DispatchMap.md)\<`shape`\>

Defined in: [src/DispatchMap.ts:17](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L17)

#### Parameters

##### shape

`shape`

#### Returns

[`DispatchMap`](DispatchMap.md)\<`shape`\>

## Accessors

### $$entry

#### Get Signature

> **get** **$$entry**(): `object`

Defined in: [src/DispatchMap.ts:33](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L33)

##### Returns

`object`

###### key

> **key**: keyof `shape`

###### value

> **value**: `shape`\[keyof `shape`\]

***

### $$key

#### Get Signature

> **get** **$$key**(): keyof `shape`

Defined in: [src/DispatchMap.ts:25](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L25)

##### Returns

keyof `shape`

***

### $$value

#### Get Signature

> **get** **$$value**(): `shape`\[keyof `shape`\]

Defined in: [src/DispatchMap.ts:29](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L29)

##### Returns

`shape`\[keyof `shape`\]

***

### reverse

#### Get Signature

> **get** **reverse**(): [`DispatchMap`](DispatchMap.md)\<`{ [key in any]: keyof shape }`\>

Defined in: [src/DispatchMap.ts:87](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L87)

##### Returns

[`DispatchMap`](DispatchMap.md)\<`{ [key in any]: keyof shape }`\>

***

### shape

#### Get Signature

> **get** **shape**(): `shape`

Defined in: [src/DispatchMap.ts:21](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L21)

##### Returns

`shape`

## Methods

### entries()

> **entries**(): `object`[]

Defined in: [src/DispatchMap.ts:49](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L49)

#### Returns

`object`[]

***

### get()

> **get**\<`key`\>(`key`): `shape`\[`key`\]

Defined in: [src/DispatchMap.ts:56](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L56)

#### Type Parameters

• **key** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`key`

#### Returns

`shape`\[`key`\]

***

### getSafe()

> **getSafe**\<`key`, `notSetValue`\>(`key`, `notSetValue`?): `notSetValue` \| `shape`\[`key`\]

Defined in: [src/DispatchMap.ts:64](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L64)

#### Type Parameters

• **key** *extends* `string` \| `number` \| `symbol`

• **notSetValue** = `undefined`

#### Parameters

##### key

`key`

##### notSetValue?

`notSetValue`

#### Returns

`notSetValue` \| `shape`\[`key`\]

***

### has()

> **has**(`key`): `key is keyof shape`

Defined in: [src/DispatchMap.ts:37](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L37)

#### Parameters

##### key

`unknown`

#### Returns

`key is keyof shape`

***

### index()

> **index**(`key`): `shape`\[keyof `shape`\]

Defined in: [src/DispatchMap.ts:75](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L75)

#### Parameters

##### key

`PropertyKey`

#### Returns

`shape`\[keyof `shape`\]

***

### indexSafe()

> **indexSafe**\<`notSetValue`\>(`key`, `notSetValue`?): `shape`\[keyof `shape`\] \| `notSetValue`

Defined in: [src/DispatchMap.ts:79](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L79)

#### Type Parameters

• **notSetValue** = `undefined`

#### Parameters

##### key

`PropertyKey`

##### notSetValue?

`notSetValue`

#### Returns

`shape`\[keyof `shape`\] \| `notSetValue`

***

### keys()

> **keys**(): keyof `shape`[]

Defined in: [src/DispatchMap.ts:41](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L41)

#### Returns

keyof `shape`[]

***

### reverseFind()

> **reverseFind**(`fn`): `undefined` \| keyof `shape`

Defined in: [src/DispatchMap.ts:101](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L101)

#### Parameters

##### fn

[`findFn`](../type-aliases/findFn.md)\<\{ `key`: keyof `shape`; `value`: `shape`\[keyof `shape`\]; \}\>

#### Returns

`undefined` \| keyof `shape`

***

### reverseFindMany()

> **reverseFindMany**(`fn`): keyof `shape`[]

Defined in: [src/DispatchMap.ts:116](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L116)

#### Parameters

##### fn

[`findFn`](../type-aliases/findFn.md)\<\{ `key`: keyof `shape`; `value`: `shape`\[keyof `shape`\]; \}\>

#### Returns

keyof `shape`[]

***

### reverseFindOne()

> **reverseFindOne**(`fn`): keyof `shape`

Defined in: [src/DispatchMap.ts:106](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L106)

#### Parameters

##### fn

[`findFn`](../type-aliases/findFn.md)\<\{ `key`: keyof `shape`; `value`: `shape`\[keyof `shape`\]; \}\>

#### Returns

keyof `shape`

***

### values()

> **values**(): `shape`\[keyof `shape`\][]

Defined in: [src/DispatchMap.ts:45](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/DispatchMap.ts#L45)

#### Returns

`shape`\[keyof `shape`\][]
