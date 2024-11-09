[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Enum](../README.md) / Enum

# Class: Enum\<values\>

## Type Parameters

• **values** *extends* [`enumValue`](../type-aliases/enumValue.md)

## Constructors

### new Enum()

> **new Enum**\<`values`\>(`values`): [`Enum`](Enum.md)\<`values`\>

#### Parameters

• **values**: `Iterable`\<`values`, `any`, `any`\>

#### Returns

[`Enum`](Enum.md)\<`values`\>

#### Defined in

[src/Enum.ts:18](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Enum.ts#L18)

## Accessors

### $$t

#### Get Signature

> **get** **$$t**(): `values`

##### Returns

`values`

#### Defined in

[src/Enum.ts:33](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Enum.ts#L33)

***

### $values

#### Get Signature

> **get** **$values**(): `Set`\<`values`\>

##### Returns

`Set`\<`values`\>

#### Defined in

[src/Enum.ts:37](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Enum.ts#L37)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`values`, `any`, `any`\>

#### Returns

`IterableIterator`\<`values`, `any`, `any`\>

#### Defined in

[src/Enum.ts:41](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Enum.ts#L41)

***

### $assert()

> **$assert**\<`subValues`\>(`value`, `subValues`?): `values`

#### Type Parameters

• **subValues** *extends* [`enumValue`](../type-aliases/enumValue.md)

#### Parameters

• **value**: `unknown`

• **subValues?**: `Iterable`\<`subValues`, `any`, `any`\>

#### Returns

`values`

#### Defined in

[src/Enum.ts:49](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Enum.ts#L49)

***

### $assertSwitchCase()

> **$assertSwitchCase**(`value`): [`Switch`](../../Switch/classes/Switch.md)\<`values`, `never`, `values`\>

#### Parameters

• **value**: `unknown`

#### Returns

[`Switch`](../../Switch/classes/Switch.md)\<`values`, `never`, `values`\>

#### Defined in

[src/Enum.ts:77](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Enum.ts#L77)

***

### $compileSwitch()

> **$compileSwitch**(): [`Switch`](../../Switch/classes/Switch.md)\<`values`, `never`, `values`\>

#### Returns

[`Switch`](../../Switch/classes/Switch.md)\<`values`, `never`, `values`\>

#### Defined in

[src/Enum.ts:81](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Enum.ts#L81)

***

### $has()

> **$has**(`value`): `value is values`

#### Parameters

• **value**: `unknown`

#### Returns

`value is values`

#### Defined in

[src/Enum.ts:45](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Enum.ts#L45)

***

### $subEnum()

> **$subEnum**\<`subValues`\>(`subValues`): [`enumStrukt`](../type-aliases/enumStrukt.md)\<`subValues`\>

#### Type Parameters

• **subValues** *extends* [`enumValue`](../type-aliases/enumValue.md)

#### Parameters

• **subValues**: `Iterable`\<`subValues`, `any`, `any`\>

#### Returns

[`enumStrukt`](../type-aliases/enumStrukt.md)\<`subValues`\>

#### Defined in

[src/Enum.ts:69](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Enum.ts#L69)

***

### $switchCase()

> **$switchCase**(`value`): [`Switch`](../../Switch/classes/Switch.md)\<`values`, `never`, `values`\>

#### Parameters

• **value**: `values`

#### Returns

[`Switch`](../../Switch/classes/Switch.md)\<`values`, `never`, `values`\>

#### Defined in

[src/Enum.ts:73](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Enum.ts#L73)

***

### $toArray()

> **$toArray**(): `values`[]

#### Returns

`values`[]

#### Defined in

[src/Enum.ts:65](https://github.com/AndreyMork/domistrukt/blob/c8d404d2a2ad3b5db17fcead4d4e5821b1cc97ac/src/Enum.ts#L65)
