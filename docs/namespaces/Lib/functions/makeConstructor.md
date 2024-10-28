[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Lib](../README.md) / makeConstructor

# Function: makeConstructor()

> **makeConstructor**\<`k`\>(`klass`): (...`params`) => `InstanceType`\<`k`\>

Creates a function that initializes an instance of a given class.

## Type Parameters

• **k** *extends* [`klass`](../../Types/type-aliases/klass.md)\<`any`[], `any`\>

The type of the class constructor.

## Parameters

• **klass**: `k`

The class constructor to create an initializer for.

## Returns

`Function`

A function that takes constructor parameters and returns a new instance of the class.

### Parameters

• ...**params**: `ConstructorParameters`\<`k`\>

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

## Defined in

[src/Lib.ts:65](https://github.com/AndreyMork/domistrukt/blob/9b256ecb394491e3c3ce021e778be2c15de76c25/src/Lib.ts#L65)
