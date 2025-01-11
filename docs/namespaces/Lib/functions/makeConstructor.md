[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [Lib](../README.md) / makeConstructor

# Function: makeConstructor()

> **makeConstructor**\<`k`\>(`klass`): (...`params`) => `InstanceType`\<`k`\>

Defined in: [src/Lib.ts:65](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/Lib.ts#L65)

Creates a function that initializes an instance of a given class.

## Type Parameters

• **k** *extends* [`klass`](../../Types/type-aliases/klass.md)\<`any`[], `any`\>

The type of the class constructor.

## Parameters

### klass

`k`

The class constructor to create an initializer for.

## Returns

`Function`

A function that takes constructor parameters and returns a new instance of the class.

### Parameters

#### params

...`ConstructorParameters`\<`k`\>

### Returns

`InstanceType`\<`k`\>

## Example

```ts
class Person {
  constructor(public name: string, public age: number) {}
}

const initPerson = makeConstructor(Person);
const john = initPerson('John', 30);
console.log(john); // Person { name: 'John', age: 30 }
```
