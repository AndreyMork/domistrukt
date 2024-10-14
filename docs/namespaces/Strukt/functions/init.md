[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Strukt](../README.md) / init

# Function: init()

> **init**\<`constructor`\>(`params`): [`struktClass`](../type-aliases/struktClass.md)\<`constructor`\>

Initializes a Strukt class.

## Type Parameters

• **constructor** *extends* [`anyConstructor`](../../Types/type-aliases/anyConstructor.md)

The constructor type.

## Parameters

• **params**: [`params`](../type-aliases/params.md)\<`constructor`\>

The parameters for initialization.

## Returns

[`struktClass`](../type-aliases/struktClass.md)\<`constructor`\>

The initialized Strukt class.

## Example

```ts
class MyClass extends init({
  constructor (args: { x: number, y: number }) {
    return {
      x: args.x,
      y: args.y,
      sum: args.x + args.y
    };
  },
  hidden: ['sum']
}) {}
const instance = new MyClass({ x: 1, y: 2 });
console.log(instance); // Output: MyClass { x: 1, y: 2, sum: 3 }
```

## Defined in

[src/Strukt.ts:140](https://github.com/AndreyMork/domistrukt/blob/ee84aeb0d3ada132fc6b9944abd48429a367a44b/src/Strukt.ts#L140)