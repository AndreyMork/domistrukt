[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Error](../README.md) / StruktErrorBase

# Class: StruktErrorBase

Base class for structured errors with metadata.

## Extends

- `Error`

## Constructors

### new StruktErrorBase()

> **new StruktErrorBase**(`msg`, `metaInput`?): [`StruktErrorBase`](StruktErrorBase.md)

#### Parameters

• **msg**: `string`

• **metaInput?**: [`errorMeta`](../type-aliases/errorMeta.md)

#### Returns

[`StruktErrorBase`](StruktErrorBase.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/Error.ts:15](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Error.ts#L15)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Overrides

`Error.message`

#### Defined in

[src/Error.ts:12](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Error.ts#L12)

***

### meta

> `readonly` **meta**: [`errorMeta`](../type-aliases/errorMeta.md)

#### Defined in

[src/Error.ts:13](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Error.ts#L13)

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/.pnpm/@types+node@22.8.1/node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/.pnpm/@types+node@22.8.1/node\_modules/@types/node/globals.d.ts:145

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/.pnpm/@types+node@22.8.1/node\_modules/@types/node/globals.d.ts:136
