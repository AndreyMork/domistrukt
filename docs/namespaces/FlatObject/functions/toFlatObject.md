[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [FlatObject](../README.md) / toFlatObject

# Function: toFlatObject()

> **toFlatObject**\<`t`\>(`obj`): [`t`](../classes/t.md)\<`t`\>

Defined in: [src/FlatObject.ts:30](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L30)

Converts a nested object into a FlatObject.

## Type Parameters

• **t**

## Parameters

### obj

`Record`\<`string`, `any`\>

The object to convert.

## Returns

[`t`](../classes/t.md)\<`t`\>

A FlatObject representation of the input object.

## Example

```ts
const flat = fromObject({ a: { b: 1 } });
console.log(flat.get(['a', 'b'])); // Outputs: 1
```
