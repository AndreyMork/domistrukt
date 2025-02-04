[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [Strukt](../README.md) / init

# Function: init()

> **init**\<`constructor`\>(`params`): [`struktClass`](../type-aliases/struktClass.md)\<`constructor`\>

Defined in: [src/Strukt.ts:50](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/Strukt.ts#L50)

Initializes a Strukt class.

## Type Parameters

• **constructor** *extends* [`anyConstructor`](../../Types/type-aliases/anyConstructor.md)

The constructor type.

## Parameters

### params

[`params`](../type-aliases/params.md)\<`constructor`\>

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
