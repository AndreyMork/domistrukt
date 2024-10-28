[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [FlatObject](../README.md) / toFlatObject

# Function: toFlatObject()

> **toFlatObject**\<`t`\>(`obj`): [`t`](../classes/t.md)\<`t`\>

Converts a nested object into a FlatObject.

## Type Parameters

• **t**

## Parameters

• **obj**: `Record`\<`string`, `any`\>

The object to convert.

## Returns

[`t`](../classes/t.md)\<`t`\>

A FlatObject representation of the input object.

## Example

```ts
const flat = fromObject({ a: { b: 1 } });
console.log(flat.get(['a', 'b'])); // Outputs: 1
```

## Defined in

[src/FlatObject.ts:30](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/FlatObject.ts#L30)
