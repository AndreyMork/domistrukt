[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Switch](../README.md) / Switch

# Class: Switch\<data, result\>

A class that allows for conditional execution of callbacks based on various criteria.

## Type Parameters

• **data**

The type of data being tested.

• **result**

The type of result returned by the callbacks.

## Constructors

### new Switch()

> **new Switch**\<`data`, `result`\>(): [`Switch`](Switch.md)\<`data`, `result`\>

#### Returns

[`Switch`](Switch.md)\<`data`, `result`\>

## Methods

### compile()

> **compile**(): (`value`) => `result`

Compiles the switch into a function that can be executed with a value.

#### Returns

`Function`

A function that takes a value and returns the result of the matching dispatcher's callback.

##### Parameters

• **value**: `data`

##### Returns

`result`

#### Defined in

[src/Switch.ts:161](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Switch.ts#L161)

***

### default()

> **default**(`fn`): [`Switch`](Switch.md)\<`data`, `result`\>

Adds a default dispatcher that always matches.

#### Parameters

• **fn**

The callback to execute if no other dispatcher matches.

#### Returns

[`Switch`](Switch.md)\<`data`, `result`\>

The current instance of Switch for chaining.

#### Defined in

[src/Switch.ts:132](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Switch.ts#L132)

***

### instance()

> **instance**\<`k`\>(`klass`, `callback`): [`Switch`](Switch.md)\<`data`, `result`\>

Adds a dispatcher that matches instances of a specific class.

#### Type Parameters

• **k** *extends* [`anyKlass`](../../Types/type-aliases/anyKlass.md)

#### Parameters

• **klass**: `k`

The class to match instances of.

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`InstanceType`\<`k`\>, `result`\>

The callback to execute if the instance matches.

#### Returns

[`Switch`](Switch.md)\<`data`, `result`\>

The current instance of Switch for chaining.

#### Defined in

[src/Switch.ts:76](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Switch.ts#L76)

***

### instances()

> **instances**\<`klasses`\>(`klasses`, `callback`): [`Switch`](Switch.md)\<`data`, `result`\>

Adds a dispatcher that matches any instance of the given classes.

#### Type Parameters

• **klasses** *extends* [`anyKlass`](../../Types/type-aliases/anyKlass.md)[]

An array of classes to match instances of.

#### Parameters

• **klasses**: `klasses`

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`InstanceType`\<`klasses`\[`number`\]\>, `result`\>

The callback to execute if any instance matches.

#### Returns

[`Switch`](Switch.md)\<`data`, `result`\>

The current instance of Switch for chaining.

#### Defined in

[src/Switch.ts:93](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Switch.ts#L93)

***

### predicate()

> **predicate**(`test`, `callback`): [`Switch`](Switch.md)\<`data`, `result`\>

Adds a dispatcher that matches a custom predicate function.

#### Parameters

• **test**: [`predicateFn`](../type-aliases/predicateFn.md)\<`data`\>

The predicate function to match.

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`data`, `result`\>

The callback to execute if the predicate returns true.

#### Returns

[`Switch`](Switch.md)\<`data`, `result`\>

The current instance of Switch for chaining.

#### Defined in

[src/Switch.ts:123](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Switch.ts#L123)

***

### run()

> **run**(`value`): `result`

Executes the first matching dispatcher for a given value.

#### Parameters

• **value**: `unknown`

The value to test against the dispatchers.

#### Returns

`result`

The result of the matching dispatcher's callback.

#### Throws

If no dispatcher matches the value.

#### Defined in

[src/Switch.ts:147](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Switch.ts#L147)

***

### test()

> **test**(`flag`, `callback`): [`Switch`](Switch.md)\<`data`, `result`\>

Adds a dispatcher that matches a boolean flag.

#### Parameters

• **flag**: `boolean`

The boolean flag to match.

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`data`, `result`\>

The callback to execute if the flag is true.

#### Returns

[`Switch`](Switch.md)\<`data`, `result`\>

The current instance of Switch for chaining.

#### Defined in

[src/Switch.ts:113](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Switch.ts#L113)

***

### value()

> **value**\<`val`\>(`value`, `callback`): [`Switch`](Switch.md)\<`data`, `result`\>

Adds a dispatcher that matches a specific value.

#### Type Parameters

• **val**

#### Parameters

• **value**: `val`

The value to match.

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`val`, `result`\>

The callback to execute if the value matches.

#### Returns

[`Switch`](Switch.md)\<`data`, `result`\>

The current instance of Switch for chaining.

#### Defined in

[src/Switch.ts:42](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Switch.ts#L42)

***

### values()

> **values**\<`values`\>(`values`, `callback`): [`Switch`](Switch.md)\<`data`, `result`\>

Adds a dispatcher that matches any value in a given array.

#### Type Parameters

• **values** *extends* `any`[]

An array of values to match.

#### Parameters

• **values**: `values`

• **callback**: [`callbackFn`](../type-aliases/callbackFn.md)\<`values`\[`number`\], `result`\>

The callback to execute if any value matches.

#### Returns

[`Switch`](Switch.md)\<`data`, `result`\>

The current instance of Switch for chaining.

#### Defined in

[src/Switch.ts:57](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Switch.ts#L57)
