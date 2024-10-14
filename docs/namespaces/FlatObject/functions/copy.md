[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [FlatObject](../README.md) / copy

# Function: copy()

> **copy**\<`t`\>(`obj`): `t`

Creates a deep copy of an object using FlatObject.

## Type Parameters

• **t** *extends* `Record`\<`string`, `any`\>

## Parameters

• **obj**: `t`

The object to copy.

## Returns

`t`

A deep copy of the input object.

## Example

```ts
const original = { a: { b: 1 } };
const copyObj = copy(original);
console.log(copyObj); // Outputs: { a: { b: 1 } }
```

## Defined in

[src/FlatObject.ts:72](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/FlatObject.ts#L72)