[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [Error](../README.md) / staticError

# Function: staticError()

> **staticError**(`params`?): [`staticErrorClass`](../type-aliases/staticErrorClass.md)

Defined in: [src/Error.ts:63](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/Error.ts#L63)

Creates a static error class with optional parameters.

## Parameters

### params?

[`staticParams`](../type-aliases/staticParams.md)

Optional parameters for the static error.

## Returns

[`staticErrorClass`](../type-aliases/staticErrorClass.md)

A class for creating static error instances.

## Example

```ts
// Create a static error class with a default message
class MyError extends staticError({ message: 'Default error message' }) {}

// Create an instance of the error with a specific message
const errorInstance = new MyError('Specific error message');
console.log(errorInstance.message); // Output: 'Specific error message'

// Create an instance with metadata
const meta = { annotation: 'test' };
const errorWithMeta = new MyError(meta);
console.log(errorWithMeta.meta); // Output: { annotation: 'test' }
```
