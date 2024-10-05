# @ayka/domistrukt

[![NPM Version](https://img.shields.io/npm/v/%40ayka%2Fdomistrukt)](https://www.npmjs.com/package/@ayka/domistrukt)
[![NPM License](https://img.shields.io/npm/l/%40ayka%2Fdomistrukt)](https://opensource.org/license/MIT)
[![NPM Downloads](https://img.shields.io/npm/dm/%40ayka%2Fdomistrukt)](https://www.npmjs.com/package/@ayka/domistrukt)

[![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/%40ayka%2Fdomistrukt)](https://bundlejs.com/?q=%40ayka%2Fdomistrukt)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40ayka%2Fdomistrukt)](https://www.npmjs.com/package/@ayka/domistrukt)

[![Tests and Code Quality](https://github.com/AndreyMork/domistrukt/actions/workflows/tests-and-code-quality.yaml/badge.svg)](https://github.com/AndreyMork/domistrukt/actions/workflows/tests-and-code-quality.yaml)
[![CodeQL](https://github.com/AndreyMork/domistrukt/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/AndreyMork/domistrukt/actions/workflows/github-code-scanning/codeql)

[![Maintainability](https://api.codeclimate.com/v1/badges/511e23db3f9fe9026c49/maintainability)](https://codeclimate.com/github/AndreyMork/domistrukt/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/511e23db3f9fe9026c49/test_coverage)](https://codeclimate.com/github/AndreyMork/domistrukt/test_coverage)
[![Mutation testing badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FAndreyMork%2Fdomistrukt%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/AndreyMork/domistrukt/main)

## Overview

`@ayka/domistrukt` is a lightweight TypeScript library that simplifies the creation of structured data objects. It offers a type-safe and flexible API for defining and initializing classes with custom properties and behaviors, making it easier to manage complex data structures in TypeScript projects.

### Key Features

- **Type-safe Class Initialization**: Ensures that classes are initialized with the correct types.
- **Custom Property Management**: Allows creation and modification of properties with ease.
- **Versatile Input/Output Support**: Handles different input and output types seamlessly.
- **Automatic Accessor Generation**: Generates accessors for specified properties automatically.
- **Flexible Configuration**: Offers various configuration options to suit different needs.
- **Helper Functions**: Includes utilities for key selection, initializer creation, cloning, and property redefinition.

## Table of Contents

- [Overview](#overview)
  - [Key Features](#key-features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Custom Create Function](#custom-create-function)
  - [Handling Different Input and Output Types](#handling-different-input-and-output-types)
  - [Handling Undefined Input](#handling-undefined-input)
  - [Creating Accessors for Properties](#creating-accessors-for-properties)
  - [Error Handling](#error-handling)
    - [Static Error Classes](#static-error-classes)
    - [Dynamic Error Classes](#dynamic-error-classes)
    - [Error Class with Input Transformation](#error-class-with-input-transformation)
- [API Reference](#api-reference)
  - [Strukt Module](#strukt-module)
  - [Error Module](#error-module)
  - [Lib Module](#lib-module)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install `@ayka/domistrukt` using your preferred package manager:

```bash
npm install @ayka/domistrukt
```

```bash
yarn add @ayka/domistrukt
```

```bash
pnpm add @ayka/domistrukt
```

## Getting Started

To begin using `@ayka/domistrukt`, follow these steps:

1. **Install the Library**: Use npm, yarn, or pnpm as shown in the [Installation](#installation) section.
2. **Import Modules**: Import the necessary modules in your TypeScript file.

```typescript
import * as Strukt from '@ayka/domistrukt';
```

## Usage

### Basic Usage

```typescript
type data = {
  valueString: string;
  valueNumber: number;
  valueBoolean: boolean;
};

class Example extends Strukt.init<data>() {}
const instance = new Example({
  valueString: '1',
  valueNumber: 1,
  valueBoolean: true,
});
console.log(instance);
```

### Custom Create Function

```typescript
class ExampleWithCreate extends Strukt.init<data>({
  create: (input) => ({ ...input, valueNumber: input.valueNumber + 1 }),
}) {}
const instanceWithCreate = new ExampleWithCreate({
  valueString: '1',
  valueNumber: 1,
  valueBoolean: true,
});
console.log(instanceWithCreate);
```

### Handling Different Input and Output Types

```typescript
class ExampleDifferentTypes extends Strukt.init<data, number>({
  create: (input) => ({
    valueNumber: input,
    valueString: '1',
    valueBoolean: true,
  }),
}) {}
const instanceDifferentTypes = new ExampleDifferentTypes(1);
console.log(instanceDifferentTypes);
```

### Handling Undefined Input

```typescript
class ExampleUndefinedInput extends Strukt.init<data, undefined>({
  create: () => ({
    valueNumber: 1,
    valueString: '1',
    valueBoolean: true,
  }),
}) {}
const instanceUndefinedInput = new ExampleUndefinedInput();
console.log(instanceUndefinedInput);
```

### Creating Accessors for Properties

This feature is useful for hiding values from logging. By defining certain properties as accessors, which can help in preventing sensitive information from being exposed in logs.

```typescript
class ExampleWithAccessors extends Strukt.init<data>({
  asAccessor: ['apiKey'],
}) {}

const instanceWithAccessors = new ExampleWithAccessors({
  someKey: 'someValue',
  apiKey: '1234567890',
});

console.log(instanceWithAccessors); // { someKey: 'someValue', apiKey: [Getter/Setter] }
```

### Error Handling

The `@ayka/domistrukt` library provides robust error handling capabilities, allowing you to define both static and dynamic error classes. This section will guide you through creating and using these error classes effectively.

#### Static Error Classes

Static error classes in `@ayka/domistrukt` provide a way to define errors with consistent messages across all instances. These messages can be predefined and optionally overridden when needed.

##### Importing the Module

To use static error classes, first import the necessary module:

```typescript
import * as Strukt from '@ayka/domistrukt';
```

##### Example 1: Static Error with Default Message

Create a static error class with a default message. This message will be used for all instances unless overridden.

```typescript
class MyStaticError extends Strukt.staticError({
  message: 'A static error occurred',
}) {}

// Usage
throw new MyStaticError({ additionalInfo: 'Some context' });
// Output: Error with message "A static error occurred" and meta { additionalInfo: 'Some context' }
```

##### Example 2: Overriding the Default Message

You can override the default message when throwing the error, providing more context-specific information.

```typescript
class MyOverriddenError extends Strukt.staticError({
  message: 'Default message',
}) {}

// Usage
throw new MyOverriddenError('Overridden message', {
  additionalInfo: 'Some context',
});
// Output: Error with message "Overridden message" and meta { additionalInfo: 'Some context' }
```

##### Example 3: Overriding Message in Constructor Parameter

You can also override the message directly in the constructor parameter, similar to the standard `Error` class.

```typescript
class MyError extends Strukt.staticError({
  message: 'Default message',
}) {}

// Usage
const errorInstance = new MyError('Custom message', {
  additionalInfo: 'Some context',
});
throw errorInstance;
// Output: Error with message "Custom message" and meta { additionalInfo: 'Some context' }
```

#### Dynamic Error Classes

Dynamic error classes allow you to define error messages based on input data, making them ideal for conveying specific information about the context in which they occurred.

```typescript
import * as Strukt from '@ayka/domistrukt';

type errorData = {
  errorCode: number;
  errorMessage: string;
};

class CustomErrorExample extends Strukt.error<errorData>({
  message: (data) => `Error ${data.errorCode}: ${data.errorMessage}`,
}) {}

try {
  throw new CustomErrorExample({ errorCode: 404, errorMessage: 'Not Found' });
} catch (error) {
  console.log(error.data.errorCode); // Output: 404
  console.error(error.message); // Output: Error 404: Not Found
}
```

#### Error Class with Input Transformation

You can define error classes that transform input data before using it to generate error messages. This is useful when the error message needs to be derived from processed data.

```typescript
import * as Strukt from '@ayka/domistrukt';

type input = { value: number };
type output = {
  value: number;
  isEven: boolean;
};

class MyError extends Strukt.error<output, input>({
  create: (input: input): output => ({
    value: input.value,
    isEven: input.value % 2 === 0,
  }),
  message: (output: output) =>
    `${output.value} is ${output.isEven ? 'even' : 'odd'}`,
}) {}

const inputData = { value: 42 };
const error = new MyError(inputData);

console.log(error.message); // Output: "42 is even"
console.log(error.data); // Output: { value: 42, isEven: true }
```

## API Reference

### Strukt Module

#### `init<output, input = output>(params?: config<input, output>): struktClass<input, output>`

Creates a new class with structured initialization.

- **output**: The type of the resulting instance.
- **input**: The type of the input data (defaults to `output` if not specified).
- **params**: Configuration options for initialization.
  - **create**: Function to transform input to output.
  - **asAccessor**: Array of keys to be defined as accessors.

Returns a class constructor that creates instances of type `output` from input of type `input`.

### Error Module

#### `staticError(params?: staticErrorConfig): staticErrorClass`

Creates a static error class with a predefined message.

- **params.message**: Static message or function to generate it.

Returns a new error class extending `StruktErrorBase`.

#### `init<output, input = output>(params?: config<input, output>): errorClass<input, output>`

Creates a custom error class with dynamic message generation.

- **output**: The type of the error data after processing.
- **input**: The type of the input data for the error.
- **params.message**: Message or function to generate it.
- **params.create**: Function to transform input to output data.

Returns a custom error class with the specified configuration.

### Lib Module

#### `selectKeys<t, key extends keyof t = keyof t>(target: t, keys: Iterable<key>): { [k in key]: t[k] }`

Selects specified keys from a target object in a type-safe manner.

#### `createInitFn<k extends klass>(klass: k): (...params: ConstructorParameters<k>) => InstanceType<k>`

Creates a function that initializes an instance of a given class.

#### `createUpdateFn<k extends klass1>(klass: k): (target: InstanceType<k>, patch: Partial<classInputType1<k>>) => InstanceType<k>`

Creates a function that updates an instance of a given class with optional property overrides.

#### `createCloneFn<k extends klass1>(klass: k): (target: InstanceType<k>) => InstanceType<k>`

Creates a function that clones an instance of a given class.

#### `redefinePropsAsAccessors<t, key extends keyof t>(target: t, props: Iterable<key>): t`

Redefines specified properties of an object as accessors (getters and setters).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
