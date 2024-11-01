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

[src/FlatObject.ts:30](https://github.com/AndreyMork/domistrukt/blob/e424882f37eb3cff2d317c2f62ddcbe7f7556be1/src/FlatObject.ts#L30)
