[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [Error](../README.md) / init

# Function: init()

> **init**\<`constructor`\>(`params`): [`errorClass`](../type-aliases/errorClass.md)\<`constructor`\>

Defined in: [src/Error.ts:141](https://github.com/AndreyMork/domistrukt/blob/d336ce883f586949cec0ae80ccb1b178d7aa8196/src/Error.ts#L141)

Initializes an error class with a given constructor.

## Type Parameters

• **constructor** *extends* [`anyErrConstructor`](../type-aliases/anyErrConstructor.md)

## Parameters

### params

[`params`](../type-aliases/params.md)\<`constructor`\>

Parameters including the constructor function.

## Returns

[`errorClass`](../type-aliases/errorClass.md)\<`constructor`\>

A class for creating error instances.

## Example

```ts
// Define a constructor function for the error
class MyError extends init({
  constructor(input: { value: number }) {
    return {
      data: { value: input.value, isEven: input.value % 2 === 0 },
      message: `Error with value ${input.value}`,
    };
  }
}) {}

// Create an instance of the error
const errorInstance = new MyError({ value: 42 });
console.log(errorInstance.message); // Output: 'Error with value 42'
console.log(errorInstance.data); // Output: { value: 42, isEven: true }
```
