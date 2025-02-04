[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [Lib](../README.md) / lazy

# Function: lazy()

> **lazy**(`opts`?): (`_target`, `propertyKey`, `descriptor`) => `void`

Defined in: [src/Lib.ts:149](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/Lib.ts#L149)

A decorator that lazily initializes a property.

## Parameters

### opts?

[`lazyOpts`](../type-aliases/lazyOpts.md)

Options for the lazy initialization.

## Returns

`Function`

A property decorator function.

### Parameters

#### \_target

`any`

#### propertyKey

`PropertyKey`

#### descriptor

`PropertyDescriptor`

### Returns

`void`

## Example

```ts
class Example {
  @lazy()
  get expensiveValue() {
    console.log('Calculating...');
    return 42;
  }
}

const instance = new Example();
console.log(instance.expensiveValue); // Logs "Calculating..." then "42"
console.log(instance.expensiveValue); // Logs "42" without recalculating
```
