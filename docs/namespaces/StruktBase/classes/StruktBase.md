[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [StruktBase](../README.md) / StruktBase

# Class: StruktBase\<args, data\>

Defined in: [src/StruktBase.ts:48](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L48)

Base class for Strukt.

## Extends

- [`BasicStrukt`](BasicStrukt.md)

## Type Parameters

• **args** *extends* [`anyArgs`](../../Types/type-aliases/anyArgs.md)

The type of arguments.

• **data** *extends* [`anyObject`](../../Types/type-aliases/anyObject.md)

The type of data.

## Constructors

### new StruktBase()

> **new StruktBase**\<`args`, `data`\>(`params`): [`StruktBase`](StruktBase.md)\<`args`, `data`\>

Defined in: [src/StruktBase.ts:55](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L55)

#### Parameters

##### params

[`params`](../type-aliases/params.md)\<`data`\>

#### Returns

[`StruktBase`](StruktBase.md)\<`args`, `data`\>

#### Overrides

[`BasicStrukt`](BasicStrukt.md).[`constructor`](BasicStrukt.md#constructors)

## Accessors

### $$args1T

#### Get Signature

> **get** **$$args1T**(): `args`\[`0`\]

Defined in: [src/StruktBase.ts:74](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L74)

Gets the first argument type.

##### Returns

`args`\[`0`\]

The first argument type.

***

### $$argsT

#### Get Signature

> **get** **$$argsT**(): `args`

Defined in: [src/StruktBase.ts:65](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L65)

Gets the type of arguments.

##### Returns

`args`

The type of arguments.

***

### $$dataT

#### Get Signature

> **get** **$$dataT**(): `data`

Defined in: [src/StruktBase.ts:82](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L82)

Gets the type of data returned by the constructor.

##### Returns

`data`

The type of data.

## Methods

### $clone()

> **$clone**(): `this`

Defined in: [src/StruktBase.ts:122](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L122)

Creates a clone of the current object.

#### Returns

`this`

A cloned instance of the object.

***

### $create()

> **$create**(...`args`): `this`

Defined in: [src/StruktBase.ts:166](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L166)

Creates a new instance of the object.

#### Parameters

##### args

...`args`

The arguments to pass to the constructor.

#### Returns

`this`

A new instance of the object.

***

### $data()

> **$data**(): `data`

Defined in: [src/StruktBase.ts:99](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L99)

Creates a data object from the instance.

#### Returns

`data`

The data object.

***

### $dataKeys()

> **$dataKeys**(): keyof `data`[]

Defined in: [src/StruktBase.ts:91](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L91)

Retrieves the keys of the data returned by the constructor.

#### Returns

keyof `data`[]

An array of data keys.

***

### $patch()

> **$patch**(`fn`): `this`

Defined in: [src/StruktBase.ts:156](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L156)

Applies a patch function to the object.

#### Parameters

##### fn

(`data`) => `Partial`\<`data`\>

The function that returns a patch.

#### Returns

`this`

A new instance with the applied patch.

***

### $selectKeys()

> **$selectKeys**\<`keys`\>(`keys`): `{ -readonly [k in keyof StruktBase<args, data>]: StruktBase<args, data>[k] }`

Defined in: [src/StruktBase.ts:114](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L114)

Selects specific keys from the object.

#### Type Parameters

• **keys** *extends* keyof [`StruktBase`](StruktBase.md)\<`args`, `data`\>

The keys to select.

#### Parameters

##### keys

`keys`[]

#### Returns

`{ -readonly [k in keyof StruktBase<args, data>]: StruktBase<args, data>[k] }`

An object with the selected keys.

***

### $update()

> **$update**(`patch`): `this`

Defined in: [src/StruktBase.ts:139](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/StruktBase.ts#L139)

Updates the object with a patch.

#### Parameters

##### patch

`Partial`\<`data`\>

The patch to apply.

#### Returns

`this`

A new instance with the applied patch.
