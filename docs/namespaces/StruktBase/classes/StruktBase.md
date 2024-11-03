[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [StruktBase](../README.md) / StruktBase

# Class: StruktBase\<args, data\>

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

#### Parameters

• **params**: [`params`](../type-aliases/params.md)\<`data`\>

#### Returns

[`StruktBase`](StruktBase.md)\<`args`, `data`\>

#### Overrides

[`BasicStrukt`](BasicStrukt.md).[`constructor`](BasicStrukt.md#constructors)

#### Defined in

[src/StruktBase.ts:55](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/StruktBase.ts#L55)

## Accessors

### $$args1T

#### Get Signature

> **get** **$$args1T**(): `args`\[`0`\]

Gets the first argument type.

##### Returns

`args`\[`0`\]

The first argument type.

#### Defined in

[src/StruktBase.ts:74](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/StruktBase.ts#L74)

***

### $$argsT

#### Get Signature

> **get** **$$argsT**(): `args`

Gets the type of arguments.

##### Returns

`args`

The type of arguments.

#### Defined in

[src/StruktBase.ts:65](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/StruktBase.ts#L65)

***

### $$dataT

#### Get Signature

> **get** **$$dataT**(): `data`

Gets the type of data returned by the constructor.

##### Returns

`data`

The type of data.

#### Defined in

[src/StruktBase.ts:82](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/StruktBase.ts#L82)

## Methods

### $clone()

> **$clone**(): `this`

Creates a clone of the current object.

#### Returns

`this`

A cloned instance of the object.

#### Defined in

[src/StruktBase.ts:122](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/StruktBase.ts#L122)

***

### $create()

> **$create**(...`args`): `this`

Creates a new instance of the object.

#### Parameters

• ...**args**: `args`

The arguments to pass to the constructor.

#### Returns

`this`

A new instance of the object.

#### Defined in

[src/StruktBase.ts:166](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/StruktBase.ts#L166)

***

### $data()

> **$data**(): `data`

Creates a data object from the instance.

#### Returns

`data`

The data object.

#### Defined in

[src/StruktBase.ts:99](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/StruktBase.ts#L99)

***

### $dataKeys()

> **$dataKeys**(): keyof `data`[]

Retrieves the keys of the data returned by the constructor.

#### Returns

keyof `data`[]

An array of data keys.

#### Defined in

[src/StruktBase.ts:91](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/StruktBase.ts#L91)

***

### $patch()

> **$patch**(`fn`): `this`

Applies a patch function to the object.

#### Parameters

• **fn**

The function that returns a patch.

#### Returns

`this`

A new instance with the applied patch.

#### Defined in

[src/StruktBase.ts:156](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/StruktBase.ts#L156)

***

### $selectKeys()

> **$selectKeys**\<`keys`\>(`keys`): `{ -readonly [k in keyof StruktBase<args, data>]: StruktBase<args, data>[k] }`

Selects specific keys from the object.

#### Type Parameters

• **keys** *extends* keyof [`StruktBase`](StruktBase.md)\<`args`, `data`\>

The keys to select.

#### Parameters

• **keys**: `keys`[]

#### Returns

`{ -readonly [k in keyof StruktBase<args, data>]: StruktBase<args, data>[k] }`

An object with the selected keys.

#### Defined in

[src/StruktBase.ts:114](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/StruktBase.ts#L114)

***

### $update()

> **$update**(`patch`): `this`

Updates the object with a patch.

#### Parameters

• **patch**: `Partial`\<`data`\>

The patch to apply.

#### Returns

`this`

A new instance with the applied patch.

#### Defined in

[src/StruktBase.ts:139](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/StruktBase.ts#L139)
