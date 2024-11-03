[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Switch](../README.md) / Switch

# Class: Switch\<target, result, notChecked\>

A class that allows for conditional execution of callbacks based on various criteria.

## Template

The type of data being tested.

## Type Parameters

• **target**

• **result** = `never`

The type of result returned by the callbacks.

• **notChecked** = `target`

The type of data that has not been checked.

## Constructors

### new Switch()

> **new Switch**\<`target`, `result`, `notChecked`\>(`params`?): [`Switch`](Switch.md)\<`target`, `result`, `notChecked`\>

#### Parameters

• **params?**: [`params`](../type-aliases/params.md)\<`target`, `result`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result`, `notChecked`\>

#### Defined in

[src/Switch.ts:41](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L41)

## Properties

### target

> **target**: `undefined` \| `target`

#### Defined in

[src/Switch.ts:36](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L36)

## Methods

### clone()

> **clone**(): [`Switch`](Switch.md)\<`target`, `result`, `target`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result`, `target`\>

#### Defined in

[src/Switch.ts:47](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L47)

***

### map()

> **map**\<`res`\>(`fn`): [`Switch`](Switch.md)\<`target`, `res`, `notChecked`\>

#### Type Parameters

• **res**

#### Parameters

• **fn**

#### Returns

[`Switch`](Switch.md)\<`target`, `res`, `notChecked`\>

#### Defined in

[src/Switch.ts:301](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L301)

***

### otherwise()

> **otherwise**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `never`\>

#### Type Parameters

• **res**

#### Parameters

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`notChecked`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `never`\>

#### Defined in

[src/Switch.ts:134](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L134)

***

### otherwiseThrow()

> **otherwiseThrow**(`error`?): [`Switch`](Switch.md)\<`target`, `result`, `never`\>

#### Parameters

• **error?**: `Error` \| (`cause`) => `Error`

#### Returns

[`Switch`](Switch.md)\<`target`, `result`, `never`\>

#### Defined in

[src/Switch.ts:143](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L143)

***

### run()

> **run**(`target`): `result`

#### Parameters

• **target**: `undefined` \| `target` = `...`

#### Returns

`result`

#### Defined in

[src/Switch.ts:69](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L69)

***

### runStrict()

> **runStrict**(...`_notChecked`): `result`

#### Parameters

• ...**\_notChecked**: [`isNever`](../../Types/type-aliases/isNever.md)\<`notChecked`\> *extends* `true` ? [] : [`never`, `"Not all cases are checked:"`, `notChecked`]

#### Returns

`result`

#### Defined in

[src/Switch.ts:103](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L103)

***

### save()

> **save**(): (`data`) => `result`

#### Returns

`Function`

##### Parameters

• **data**: `target`

##### Returns

`result`

#### Defined in

[src/Switch.ts:64](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L64)

***

### saveStrict()

> **saveStrict**(...`_notChecked`): (`data`) => `result`

#### Parameters

• ...**\_notChecked**: [`isNever`](../../Types/type-aliases/isNever.md)\<`notChecked`\> *extends* `true` ? [] : [`never`, `"Not all cases are checked:"`, `notChecked`]

#### Returns

`Function`

##### Parameters

• **data**: `target`

##### Returns

`result`

#### Defined in

[src/Switch.ts:95](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L95)

***

### setData()

> **setData**(`data`): [`Switch`](Switch.md)\<`target`, `result`, `notChecked`\>

#### Parameters

• **data**: `target`

#### Returns

[`Switch`](Switch.md)\<`target`, `result`, `notChecked`\>

#### Defined in

[src/Switch.ts:59](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L59)

***

### verify()

> **verify**(...`_notChecked`): `this`

#### Parameters

• ...**\_notChecked**: [`isNever`](../../Types/type-aliases/isNever.md)\<`notChecked`\> *extends* `true` ? [] : [`never`, `"Not all cases are checked:"`, `notChecked`]

#### Returns

`this`

#### Defined in

[src/Switch.ts:87](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L87)

***

### when()

> **when**\<`checked`, `res`\>(`test`, `callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `checked`\>\>

#### Type Parameters

• **checked**

• **res** = `result`

#### Parameters

• **test**: `boolean` \| [`predicateFn`](../type-aliases/predicateFn.md)\<`target`\>

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`target`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `checked`\>\>

#### Defined in

[src/Switch.ts:117](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L117)

***

### whenBigint()

> **whenBigint**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `bigint`\>\>

#### Type Parameters

• **res**

#### Parameters

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`bigint`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `bigint`\>\>

#### Defined in

[src/Switch.ts:226](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L226)

***

### whenBoolean()

> **whenBoolean**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `boolean`\>\>

#### Type Parameters

• **res**

#### Parameters

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`boolean`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `boolean`\>\>

#### Defined in

[src/Switch.ts:218](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L218)

***

### whenFalse()

> **whenFalse**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `false`\>\>

#### Type Parameters

• **res**

#### Parameters

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`false`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `false`\>\>

#### Defined in

[src/Switch.ts:292](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L292)

***

### whenInstance()

#### whenInstance(klass, callback)

> **whenInstance**\<`k`, `res`\>(`klass`, `callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `InstanceType`\<`k`\>\>\>

##### Type Parameters

• **k** *extends* [`anyKlass`](../../Types/type-aliases/anyKlass.md)

• **res**

##### Parameters

• **klass**: `k`

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`InstanceType`\<`k`\>, `res`\>

##### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `InstanceType`\<`k`\>\>\>

##### Defined in

[src/Switch.ts:185](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L185)

#### whenInstance(klasses, callback)

> **whenInstance**\<`k`, `res`\>(`klasses`, `callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `InstanceType`\<`k`\[`number`\]\>\>\>

##### Type Parameters

• **k** *extends* [`anyKlass`](../../Types/type-aliases/anyKlass.md)[]

• **res**

##### Parameters

• **klasses**: `k`

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`InstanceType`\<`k`\[`number`\]\>, `res`\>

##### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `InstanceType`\<`k`\[`number`\]\>\>\>

##### Defined in

[src/Switch.ts:189](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L189)

***

### whenNull()

> **whenNull**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `null`\>\>

#### Type Parameters

• **res**

#### Parameters

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`null`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `null`\>\>

#### Defined in

[src/Switch.ts:267](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L267)

***

### whenNumber()

> **whenNumber**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `number`\>\>

#### Type Parameters

• **res**

#### Parameters

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`number`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `number`\>\>

#### Defined in

[src/Switch.ts:214](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L214)

***

### whenOptional()

> **whenOptional**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`any`, `any`, `any`\>

#### Type Parameters

• **res**

#### Parameters

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`undefined` \| `null`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`any`, `any`, `any`\>

#### Defined in

[src/Switch.ts:276](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L276)

***

### whenString()

> **whenString**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `string`\>\>

#### Type Parameters

• **res**

#### Parameters

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`string`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `string`\>\>

#### Defined in

[src/Switch.ts:210](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L210)

***

### whenSymbol()

> **whenSymbol**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `symbol`\>\>

#### Type Parameters

• **res**

#### Parameters

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`symbol`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `symbol`\>\>

#### Defined in

[src/Switch.ts:222](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L222)

***

### whenTrue()

> **whenTrue**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `true`\>\>

#### Type Parameters

• **res**

#### Parameters

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`true`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `true`\>\>

#### Defined in

[src/Switch.ts:283](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L283)

***

### whenTypeOf()

#### whenTypeOf(type, callback)

> **whenTypeOf**\<`res`\>(`type`, `callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `string`\>\>

##### Type Parameters

• **res**

##### Parameters

• **type**: `"string"`

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`string`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `string`\>\>

##### Defined in

[src/Switch.ts:230](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L230)

#### whenTypeOf(type, callback)

> **whenTypeOf**\<`res`\>(`type`, `callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `number`\>\>

##### Type Parameters

• **res**

##### Parameters

• **type**: `"number"`

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`number`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `number`\>\>

##### Defined in

[src/Switch.ts:234](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L234)

#### whenTypeOf(type, callback)

> **whenTypeOf**\<`res`\>(`type`, `callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `boolean`\>\>

##### Type Parameters

• **res**

##### Parameters

• **type**: `"boolean"`

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`boolean`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `boolean`\>\>

##### Defined in

[src/Switch.ts:238](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L238)

#### whenTypeOf(type, callback)

> **whenTypeOf**\<`res`\>(`type`, `callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `symbol`\>\>

##### Type Parameters

• **res**

##### Parameters

• **type**: `"symbol"`

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`symbol`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `symbol`\>\>

##### Defined in

[src/Switch.ts:242](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L242)

#### whenTypeOf(type, callback)

> **whenTypeOf**\<`res`\>(`type`, `callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `bigint`\>\>

##### Type Parameters

• **res**

##### Parameters

• **type**: `"bigint"`

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`bigint`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `bigint`\>\>

##### Defined in

[src/Switch.ts:246](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L246)

***

### whenUndefined()

> **whenUndefined**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `undefined`\>\>

#### Type Parameters

• **res**

#### Parameters

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`undefined`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `undefined`\>\>

#### Defined in

[src/Switch.ts:258](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L258)

***

### whenValue()

#### whenValue(value, callback)

> **whenValue**\<`val`, `res`\>(`value`, `callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `val`\[`number`\]\>\>

##### Type Parameters

• **val** *extends* `any`[]

• **res**

##### Parameters

• **value**: `val`

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`val`\[`number`\], `res`\>

##### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `val`\[`number`\]\>\>

##### Defined in

[src/Switch.ts:162](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L162)

#### whenValue(value, callback)

> **whenValue**\<`val`, `res`\>(`value`, `callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `val`\>\>

##### Type Parameters

• **val**

• **res**

##### Parameters

• **value**: `val`

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`val`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `val`\>\>

##### Defined in

[src/Switch.ts:166](https://github.com/AndreyMork/domistrukt/blob/edcfe9ca26584b5845c6864b1bb3eb94a6a879e3/src/Switch.ts#L166)
