[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [Enum](../README.md) / Enum

# Class: Enum\<values\>

Defined in: [src/Enum.ts:16](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L16)

## Type Parameters

• **values** *extends* [`enumValue`](../type-aliases/enumValue.md)

## Constructors

### new Enum()

> **new Enum**\<`values`\>(`values`): [`Enum`](Enum.md)\<`values`\>

Defined in: [src/Enum.ts:19](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L19)

#### Parameters

##### values

`Iterable`\<`values`\>

#### Returns

[`Enum`](Enum.md)\<`values`\>

## Accessors

### $$t

#### Get Signature

> **get** **$$t**(): `values`

Defined in: [src/Enum.ts:34](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L34)

##### Returns

`values`

***

### $values

#### Get Signature

> **get** **$values**(): `Set`\<`values`\>

Defined in: [src/Enum.ts:38](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L38)

##### Returns

`Set`\<`values`\>

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`values`\>

Defined in: [src/Enum.ts:42](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L42)

#### Returns

`IterableIterator`\<`values`\>

***

### $add()

> **$add**\<`newValues`\>(...`values`): [`enumStrukt`](../type-aliases/enumStrukt.md)\<`values` \| `newValues`\>

Defined in: [src/Enum.ts:78](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L78)

#### Type Parameters

• **newValues** *extends* [`enumValue`](../type-aliases/enumValue.md)

#### Parameters

##### values

...`newValues`[]

#### Returns

[`enumStrukt`](../type-aliases/enumStrukt.md)\<`values` \| `newValues`\>

***

### $assert()

> **$assert**\<`subValues`\>(`value`, `subValues`?): `values`

Defined in: [src/Enum.ts:54](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L54)

#### Type Parameters

• **subValues** *extends* [`enumValue`](../type-aliases/enumValue.md)

#### Parameters

##### value

`unknown`

##### subValues?

`Iterable`\<`subValues`\>

#### Returns

`values`

***

### $assertSwitchCase()

> **$assertSwitchCase**(`value`): [`Switch`](../../Switch/classes/Switch.md)\<`values`, `values`\>

Defined in: [src/Enum.ts:93](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L93)

#### Parameters

##### value

`unknown`

#### Returns

[`Switch`](../../Switch/classes/Switch.md)\<`values`, `values`\>

***

### $compileSwitch()

> **$compileSwitch**(): [`Switch`](../../Switch/classes/Switch.md)\<`values`, `values`\>

Defined in: [src/Enum.ts:97](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L97)

#### Returns

[`Switch`](../../Switch/classes/Switch.md)\<`values`, `values`\>

***

### $has()

> **$has**(`value`): `value is values`

Defined in: [src/Enum.ts:46](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L46)

#### Parameters

##### value

`unknown`

#### Returns

`value is values`

***

### $is()

> **$is**\<`target`\>(`target`, `value`): `value is target`

Defined in: [src/Enum.ts:50](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L50)

#### Type Parameters

• **target** *extends* [`enumValue`](../type-aliases/enumValue.md)

#### Parameters

##### target

`target`

##### value

`unknown`

#### Returns

`value is target`

***

### $remove()

> **$remove**\<`removedValues`\>(...`values`): [`enumStrukt`](../type-aliases/enumStrukt.md)\<`Exclude`\<`values`, `removedValues`\>\>

Defined in: [src/Enum.ts:82](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L82)

#### Type Parameters

• **removedValues** *extends* [`enumValue`](../type-aliases/enumValue.md)

#### Parameters

##### values

...`removedValues`[]

#### Returns

[`enumStrukt`](../type-aliases/enumStrukt.md)\<`Exclude`\<`values`, `removedValues`\>\>

***

### $subEnum()

> **$subEnum**\<`subValues`\>(`subValues`): [`enumStrukt`](../type-aliases/enumStrukt.md)\<`subValues`\>

Defined in: [src/Enum.ts:74](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L74)

#### Type Parameters

• **subValues** *extends* [`enumValue`](../type-aliases/enumValue.md)

#### Parameters

##### subValues

`Iterable`\<`subValues`\>

#### Returns

[`enumStrukt`](../type-aliases/enumStrukt.md)\<`subValues`\>

***

### $switchCase()

> **$switchCase**(`value`): [`Switch`](../../Switch/classes/Switch.md)\<`values`, `values`\>

Defined in: [src/Enum.ts:89](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L89)

#### Parameters

##### value

`values`

#### Returns

[`Switch`](../../Switch/classes/Switch.md)\<`values`, `values`\>

***

### $toArray()

> **$toArray**(): `values`[]

Defined in: [src/Enum.ts:70](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Enum.ts#L70)

#### Returns

`values`[]
