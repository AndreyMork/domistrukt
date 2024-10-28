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

[src/FlatObject.ts:72](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/FlatObject.ts#L72)
