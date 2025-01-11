[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [Switch](../README.md) / Switch

# Class: Switch\<target, result, notChecked\>

Defined in: [src/Switch.ts:73](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L73)

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

> **new Switch**\<`target`, `result`, `notChecked`\>(`params`?): [`Switch`](Switch.md)\<`result`, `notChecked`\>

Defined in: [src/Switch.ts:78](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L78)

#### Parameters

##### params?

[`params`](../type-aliases/params.md)\<`target`, `result`\>

#### Returns

[`Switch`](Switch.md)\<`result`, `notChecked`\>

## Properties

### target?

> `optional` **target**: `target`

Defined in: [src/Switch.ts:73](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L73)

## Methods

### clone()

> **clone**(): [`Switch`](Switch.md)\<`result`\>

Defined in: [src/Switch.ts:84](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L84)

#### Returns

[`Switch`](Switch.md)\<`result`\>

***

### map()

> **map**\<`res`\>(`fn`): [`Switch`](Switch.md)\<`res`, `notChecked`\>

Defined in: [src/Switch.ts:353](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L353)

#### Type Parameters

• **res**

#### Parameters

##### fn

[`callbackFn`](../type-aliases/callbackFn.md)\<`result`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`res`, `notChecked`\>

***

### otherwise()

> **otherwise**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`result` \| `res`\>

Defined in: [src/Switch.ts:186](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L186)

#### Type Parameters

• **res**

#### Parameters

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`notChecked`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`result` \| `res`\>

***

### otherwiseThrow()

> **otherwiseThrow**(`error`?): [`Switch`](Switch.md)\<`result`\>

Defined in: [src/Switch.ts:195](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L195)

#### Parameters

##### error?

`Error` | [`errorCallback`](../type-aliases/errorCallback.md)\<`notChecked`\>

#### Returns

[`Switch`](Switch.md)\<`result`\>

***

### run()

> **run**(`target`?, `ctxData`?): `result`

Defined in: [src/Switch.ts:105](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L105)

#### Parameters

##### target?

`target`

##### ctxData?

`any`

#### Returns

`result`

***

### runStrict()

> **runStrict**(...`_notChecked`): `result`

Defined in: [src/Switch.ts:152](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L152)

#### Parameters

##### \_notChecked

...[`isNever`](../../Types/type-aliases/isNever.md)\<`notChecked`\> *extends* `true` ? \[\] : \[`never`, `"Not all cases are checked:"`, `notChecked`\]

#### Returns

`result`

***

### save()

> **save**(): (`data`, `ctxData`?) => `result`

Defined in: [src/Switch.ts:100](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L100)

#### Returns

`Function`

##### Parameters

###### data

`target`

###### ctxData?

`any`

##### Returns

`result`

***

### saveStrict()

> **saveStrict**(...`_notChecked`): (`data`, `ctxData`?) => `result`

Defined in: [src/Switch.ts:144](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L144)

#### Parameters

##### \_notChecked

...[`isNever`](../../Types/type-aliases/isNever.md)\<`notChecked`\> *extends* `true` ? \[\] : \[`never`, `"Not all cases are checked:"`, `notChecked`\]

#### Returns

`Function`

##### Parameters

###### data

`target`

###### ctxData?

`any`

##### Returns

`result`

***

### verify()

> **verify**(...`_notChecked`): `this`

Defined in: [src/Switch.ts:136](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L136)

#### Parameters

##### \_notChecked

...[`isNever`](../../Types/type-aliases/isNever.md)\<`notChecked`\> *extends* `true` ? \[\] : \[`never`, `"Not all cases are checked:"`, `notChecked`\]

#### Returns

`this`

***

### when()

> **when**\<`checked`, `res`\>(`test`, `callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `checked`\>\>

Defined in: [src/Switch.ts:166](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L166)

#### Type Parameters

• **checked** = `never`

• **res** = `result`

#### Parameters

##### test

`boolean` | [`predicateFn`](../type-aliases/predicateFn.md)\<`target`\>

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<[`isNever`](../../Types/type-aliases/isNever.md)\<`checked`\> *extends* `true` ? `target` : `checked`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `checked`\>\>

***

### whenBigint()

> **whenBigint**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `bigint`\>\>

Defined in: [src/Switch.ts:278](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L278)

#### Type Parameters

• **res**

#### Parameters

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`bigint`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `bigint`\>\>

***

### whenBoolean()

> **whenBoolean**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `boolean`\>\>

Defined in: [src/Switch.ts:270](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L270)

#### Type Parameters

• **res**

#### Parameters

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`boolean`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `boolean`\>\>

***

### whenFalse()

> **whenFalse**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `false`\>\>

Defined in: [src/Switch.ts:344](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L344)

#### Type Parameters

• **res**

#### Parameters

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`false`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `false`\>\>

***

### whenInstance()

#### Call Signature

> **whenInstance**\<`k`, `res`\>(`klass`, `callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `InstanceType`\<`k`\>\>\>

Defined in: [src/Switch.ts:237](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L237)

##### Type Parameters

• **k** *extends* [`anyClass`](../../Types/type-aliases/anyClass.md)

• **res**

##### Parameters

###### klass

`k`

###### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`InstanceType`\<`k`\>, `res`\>

##### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `InstanceType`\<`k`\>\>\>

#### Call Signature

> **whenInstance**\<`k`, `res`\>(`klasses`, `callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `InstanceType`\<`k`\[`number`\]\>\>\>

Defined in: [src/Switch.ts:241](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L241)

##### Type Parameters

• **k** *extends* [`anyClass`](../../Types/type-aliases/anyClass.md)[]

• **res**

##### Parameters

###### klasses

`k`

###### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`InstanceType`\<`k`\[`number`\]\>, `res`\>

##### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `InstanceType`\<`k`\[`number`\]\>\>\>

***

### whenNull()

> **whenNull**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `null`\>\>

Defined in: [src/Switch.ts:319](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L319)

#### Type Parameters

• **res**

#### Parameters

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`null`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `null`\>\>

***

### whenNumber()

> **whenNumber**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `number`\>\>

Defined in: [src/Switch.ts:266](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L266)

#### Type Parameters

• **res**

#### Parameters

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`number`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `number`\>\>

***

### whenOptional()

> **whenOptional**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`any`, `any`, `any`\>

Defined in: [src/Switch.ts:328](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L328)

#### Type Parameters

• **res**

#### Parameters

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`undefined` \| `null`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`any`, `any`, `any`\>

***

### whenString()

> **whenString**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `string`\>\>

Defined in: [src/Switch.ts:262](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L262)

#### Type Parameters

• **res**

#### Parameters

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`string`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `string`\>\>

***

### whenSymbol()

> **whenSymbol**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `symbol`\>\>

Defined in: [src/Switch.ts:274](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L274)

#### Type Parameters

• **res**

#### Parameters

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`symbol`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `symbol`\>\>

***

### whenTrue()

> **whenTrue**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `true`\>\>

Defined in: [src/Switch.ts:335](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L335)

#### Type Parameters

• **res**

#### Parameters

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`true`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `true`\>\>

***

### whenTypeOf()

#### Call Signature

> **whenTypeOf**\<`res`\>(`type`, `callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `string`\>\>

Defined in: [src/Switch.ts:282](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L282)

##### Type Parameters

• **res**

##### Parameters

###### type

`"string"`

###### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`string`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `string`\>\>

#### Call Signature

> **whenTypeOf**\<`res`\>(`type`, `callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `number`\>\>

Defined in: [src/Switch.ts:286](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L286)

##### Type Parameters

• **res**

##### Parameters

###### type

`"number"`

###### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`number`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `number`\>\>

#### Call Signature

> **whenTypeOf**\<`res`\>(`type`, `callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `boolean`\>\>

Defined in: [src/Switch.ts:290](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L290)

##### Type Parameters

• **res**

##### Parameters

###### type

`"boolean"`

###### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`boolean`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `boolean`\>\>

#### Call Signature

> **whenTypeOf**\<`res`\>(`type`, `callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `symbol`\>\>

Defined in: [src/Switch.ts:294](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L294)

##### Type Parameters

• **res**

##### Parameters

###### type

`"symbol"`

###### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`symbol`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `symbol`\>\>

#### Call Signature

> **whenTypeOf**\<`res`\>(`type`, `callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `bigint`\>\>

Defined in: [src/Switch.ts:298](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L298)

##### Type Parameters

• **res**

##### Parameters

###### type

`"bigint"`

###### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`bigint`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `bigint`\>\>

***

### whenUndefined()

> **whenUndefined**\<`res`\>(`callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `undefined`\>\>

Defined in: [src/Switch.ts:310](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L310)

#### Type Parameters

• **res**

#### Parameters

##### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`undefined`, `res`\>

#### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `undefined`\>\>

***

### whenValue()

#### Call Signature

> **whenValue**\<`val`, `res`\>(`value`, `callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `val`\[`number`\]\>\>

Defined in: [src/Switch.ts:214](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L214)

##### Type Parameters

• **val** *extends* `notChecked`[]

• **res**

##### Parameters

###### value

`val`

###### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`val`\[`number`\], `res`\>

##### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `val`\[`number`\]\>\>

#### Call Signature

> **whenValue**\<`val`, `res`\>(`value`, `callback`): [`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `val`\>\>

Defined in: [src/Switch.ts:218](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Switch.ts#L218)

##### Type Parameters

• **val**

• **res**

##### Parameters

###### value

`val`

###### callback

[`callbackFn`](../type-aliases/callbackFn.md)\<`val`, `res`\>

##### Returns

[`Switch`](Switch.md)\<`result` \| `res`, `Exclude`\<`notChecked`, `val`\>\>
