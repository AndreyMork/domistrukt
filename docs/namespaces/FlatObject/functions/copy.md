[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [FlatObject](../README.md) / copy

# Function: copy()

> **copy**\<`t`\>(`obj`): `t`

Defined in: [src/FlatObject.ts:72](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L72)

Creates a deep copy of an object using FlatObject.

## Type Parameters

• **t** *extends* `Record`\<`string`, `any`\>

## Parameters

### obj

`t`

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
