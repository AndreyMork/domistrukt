[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [Lib](../README.md) / redefineAsAccessors

# Function: redefineAsAccessors()

> **redefineAsAccessors**\<`t`, `key`\>(`target`, `props`): `t`

Defined in: [src/Lib.ts:98](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Lib.ts#L98)

Redefines specified properties of an object as accessors (getters and setters).
This function mutates the original object and returns it.
The redefined properties will behave like normal properties when accessed or modified,
but they will be implemented as getters and setters internally.
This is useful for hiding properties from console.log, as they will be printed as [Getter/Setter].

## Type Parameters

• **t**

The type of the target object.

• **key** *extends* `string` \| `number` \| `symbol`

The type of the keys to be redefined, must be a subset of keyof t.

## Parameters

### target

`t`

The object whose properties are to be redefined.

### props

`Iterable`\<`key`\>

An iterable of property names to be redefined as accessors.

## Returns

`t`

The modified target object.

## Example

```ts
const obj = { a: 1, b: 2, c: 3 };
redefineAsAccessors(obj, ['a', 'b']);
console.log(obj); // Outputs: { a: [Getter/Setter], b: [Getter/Setter], c: 3 }
obj.a = 4;
console.log(obj.a); // Outputs: 4
console.log(Object.getOwnPropertyDescriptor(obj, 'a')); // Shows getter and setter
```
