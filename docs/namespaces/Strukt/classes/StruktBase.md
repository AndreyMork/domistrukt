[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Strukt](../README.md) / StruktBase

# Class: StruktBase\<args\>

Base class for Strukt.

## Type Parameters

• **args** *extends* `any`[]

The type of arguments.

## Constructors

### new StruktBase()

> **new StruktBase**\<`args`\>(...`args`): [`StruktBase`](StruktBase.md)\<`args`\>

#### Parameters

• ...**args**: `args`

#### Returns

[`StruktBase`](StruktBase.md)\<`args`\>

#### Defined in

[src/Strukt.ts:23](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Strukt.ts#L23)

## Accessors

### $args

> `get` **$args**(): `args`

Returns the arguments with which the instance was created.

#### Example

```ts
const instance = new StruktBase(1, 2, 3);
console.log(instance.$args); // Output: [1, 2, 3]
```

#### Returns

`args`

The arguments used during instantiation.

#### Defined in

[src/Strukt.ts:34](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Strukt.ts#L34)

***

### $args1

> `get` **$args1**(): `args`\[`0`\]

Returns the first argument with which the instance was created.

#### Example

```ts
const instance = new StruktBase('first', 'second');
console.log(instance.$args1); // Output: 'first'
```

#### Returns

`args`\[`0`\]

The first argument.

#### Defined in

[src/Strukt.ts:45](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Strukt.ts#L45)

## Methods

### $clone()

> **$clone**(): `this`

Clones the current instance.

#### Returns

`this`

The cloned instance.

#### Example

```ts
const instance = new StruktBase(1, 2, 3);
const clone = instance.$clone();
console.log(clone.$args); // Output: [1, 2, 3]
```

#### Defined in

[src/Strukt.ts:80](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Strukt.ts#L80)

***

### $create()

> **$create**(...`args`): `this`

Creates a new instance with the given arguments.

#### Parameters

• ...**args**: `args`

The arguments for the new instance.

#### Returns

`this`

The new instance.

#### Defined in

[src/Strukt.ts:67](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Strukt.ts#L67)

***

### $selectKeys()

> **$selectKeys**\<`keys`\>(`keys`): `{ -readonly [k in keyof StruktBase<args>]: StruktBase<args>[k] }`

Selects keys from the instance.

#### Type Parameters

• **keys** *extends* keyof [`StruktBase`](StruktBase.md)\<`args`\>

The keys to select.

#### Parameters

• **keys**: `keys`[]

The keys to select.

#### Returns

`{ -readonly [k in keyof StruktBase<args>]: StruktBase<args>[k] }`

The selected keys.

#### Example

```ts
const instance = new StruktBase({ a: 1, b: 2, c: 3 });
console.log(instance.$selectKeys(['a', 'c'])); // Output: { a: 1, c: 3 }
```

#### Defined in

[src/Strukt.ts:58](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Strukt.ts#L58)

***

### $update()

> **$update**(`patch`): `args` *extends* [`any`] ? [`StruktBase`](StruktBase.md)\<`args`\> : `never`

Updates the instance with a patch.

#### Parameters

• **patch**: `Partial`\<`args`\[`0`\]\>

The patch to apply.

#### Returns

`args` *extends* [`any`] ? [`StruktBase`](StruktBase.md)\<`args`\> : `never`

The updated instance.

#### Throws

If the number of arguments is greater than one.

#### Example

```ts
const instance = new StruktBase({ a: 1, b: 2 });
const updated = instance.$update({ b: 3 });
console.log(updated.$args1); // Output: { a: 1, b: 3 }
```

#### Defined in

[src/Strukt.ts:94](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Strukt.ts#L94)
