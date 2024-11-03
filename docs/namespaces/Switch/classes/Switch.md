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

[src/Switch.ts:72](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L72)

## Properties

### target

> **target**: `undefined` \| `target`

#### Defined in

[src/Switch.ts:67](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L67)

## Methods

### clone()

> **clone**(): [`Switch`](Switch.md)\<`target`, `result`, `target`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result`, `target`\>

#### Defined in

[src/Switch.ts:78](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L78)

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

[src/Switch.ts:347](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L347)

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

[src/Switch.ts:180](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L180)

***

### otherwiseThrow()

> **otherwiseThrow**(`error`?): [`Switch`](Switch.md)\<`target`, `result`, `never`\>

#### Parameters

• **error?**: `Error` \| (`cause`) => `Error`

#### Returns

[`Switch`](Switch.md)\<`target`, `result`, `never`\>

#### Defined in

[src/Switch.ts:189](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L189)

***

### run()

> **run**(`target`?, `ctxData`?): `result`

#### Parameters

• **target?**: `target`

• **ctxData?**: `any`

#### Returns

`result`

#### Defined in

[src/Switch.ts:99](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L99)

***

### runStrict()

> **runStrict**(...`_notChecked`): `result`

#### Parameters

• ...**\_notChecked**: [`isNever`](../../Types/type-aliases/isNever.md)\<`notChecked`\> *extends* `true` ? [] : [`never`, `"Not all cases are checked:"`, `notChecked`]

#### Returns

`result`

#### Defined in

[src/Switch.ts:146](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L146)

***

### save()

> **save**(): (`data`, `ctxData`?) => `result`

#### Returns

`Function`

##### Parameters

• **data**: `target`

• **ctxData?**: `any`

##### Returns

`result`

#### Defined in

[src/Switch.ts:94](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L94)

***

### saveStrict()

> **saveStrict**(...`_notChecked`): (`data`, `ctxData`?) => `result`

#### Parameters

• ...**\_notChecked**: [`isNever`](../../Types/type-aliases/isNever.md)\<`notChecked`\> *extends* `true` ? [] : [`never`, `"Not all cases are checked:"`, `notChecked`]

#### Returns

`Function`

##### Parameters

• **data**: `target`

• **ctxData?**: `any`

##### Returns

`result`

#### Defined in

[src/Switch.ts:138](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L138)

***

### verify()

> **verify**(...`_notChecked`): `this`

#### Parameters

• ...**\_notChecked**: [`isNever`](../../Types/type-aliases/isNever.md)\<`notChecked`\> *extends* `true` ? [] : [`never`, `"Not all cases are checked:"`, `notChecked`]

#### Returns

`this`

#### Defined in

[src/Switch.ts:130](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L130)

***

### when()

> **when**\<`checked`, `res`\>(`test`, `callback`): [`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `checked`\>\>

#### Type Parameters

• **checked** = `never`

• **res** = `result`

#### Parameters

• **test**: `boolean` \| [`predicateFn`](../type-aliases/predicateFn.md)\<`target`\>

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<[`isNever`](../../Types/type-aliases/isNever.md)\<`checked`\> *extends* `true` ? `target` : `checked`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`target`, `result` \| `res`, `Exclude`\<`notChecked`, `checked`\>\>

#### Defined in

[src/Switch.ts:160](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L160)

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

[src/Switch.ts:272](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L272)

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

[src/Switch.ts:264](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L264)

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

[src/Switch.ts:338](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L338)

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

[src/Switch.ts:231](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L231)

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

[src/Switch.ts:235](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L235)

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

[src/Switch.ts:313](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L313)

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

[src/Switch.ts:260](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L260)

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

[src/Switch.ts:322](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L322)

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

[src/Switch.ts:256](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L256)

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

[src/Switch.ts:268](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L268)

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

[src/Switch.ts:329](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L329)

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

[src/Switch.ts:276](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L276)

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

[src/Switch.ts:280](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L280)

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

[src/Switch.ts:284](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L284)

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

[src/Switch.ts:288](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L288)

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

[src/Switch.ts:292](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L292)

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

[src/Switch.ts:304](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L304)

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

[src/Switch.ts:208](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L208)

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

[src/Switch.ts:212](https://github.com/AndreyMork/domistrukt/blob/afa9cf17027abfba6baa33ec45e8c09e6e425aa7/src/Switch.ts#L212)
