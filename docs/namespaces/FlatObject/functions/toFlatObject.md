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

[src/FlatObject.ts:30](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/FlatObject.ts#L30)