# @ayka/domistrukt

[![NPM Version](https://img.shields.io/npm/v/%40ayka%2Fdomistrukt)](https://www.npmjs.com/package/@ayka/domistrukt)
[![NPM License](https://img.shields.io/npm/l/%40ayka%2Fdomistrukt)](https://www.npmjs.com/package/@ayka/domistrukt)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40ayka%2Fdomistrukt)](https://www.npmjs.com/package/@ayka/domistrukt)
[![NPM Downloads](https://img.shields.io/npm/dm/%40ayka%2Fdomistrukt)](https://www.npmjs.com/package/@ayka/domistrukt)

[![Tests and Code Quality](https://github.com/AndreyMork/domistrukt/actions/workflows/tests-and-code-quality.yaml/badge.svg)](https://github.com/AndreyMork/domistrukt/actions/workflows/tests-and-code-quality.yaml)
[![CodeQL](https://github.com/AndreyMork/domistrukt/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/AndreyMork/domistrukt/actions/workflows/github-code-scanning/codeql)

[![Maintainability](https://api.codeclimate.com/v1/badges/511e23db3f9fe9026c49/maintainability)](https://codeclimate.com/github/AndreyMork/domistrukt/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/511e23db3f9fe9026c49/test_coverage)](https://codeclimate.com/github/AndreyMork/domistrukt/test_coverage)
[![Mutation testing badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FAndreyMork%2Fdomistrukt%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/AndreyMork/domistrukt/main)

## Overview

`@ayka/domistrukt` is a lightweight TypeScript library designed to simplify the creation of structured data objects. It provides a type-safe and flexible API for defining and initializing classes with custom properties and behaviors, making it easier to manage complex data structures in TypeScript projects.

### Key Features

- **Type-safe Class Initialization**: Ensures that classes are initialized with the correct types.
- **Custom Property Management**: Allows easy creation and modification of properties.
- **Versatile Input/Output Support**: Seamlessly handles different input and output types.
- **Automatic Accessor Generation**: Automatically generates accessors for specified properties.
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
  - [Handling Undefined Input](#handling-undefined-input)
  - [Creating Accessors for Properties](#creating-accessors-for-properties)
  - [Different Input and Data Types](#different-input-and-data-types)
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

// Basic initialization with type-safe properties
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
// Initialization with a custom create function
class ExampleWithCreate extends Strukt.init({
  create: (input: data) => ({ ...input, valueNumber: input.valueNumber + 1 }),
}) {}
const instanceWithCreate = new ExampleWithCreate({
  valueString: '1',
  valueNumber: 1,
  valueBoolean: true,
});
console.log(instanceWithCreate);
```

### Handling Undefined Input

```typescript
// Handling undefined input by using default values
class ExampleUndefinedInput extends Strukt.init({
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

This feature is useful for hiding values from logging. By defining certain properties as accessors, you can prevent sensitive information from being exposed in logs.

```typescript
// Using accessors to protect sensitive data
class ExampleWithAccessors extends Strukt.init<data>({
  asAccessor: ['apiKey'],
}) {}

const instanceWithAccessors = new ExampleWithAccessors({
  someKey: 'someValue',
  apiKey: '1234567890',
});

console.log(instanceWithAccessors); // { someKey: 'someValue', apiKey: [Getter/Setter] }
```

### Different Input and Data Types

When the input and data types are different, the `create` function can be used to transform the input into the desired data structure. The types are inferred from the `create` function, so they should not be provided in the generic.

```typescript
type input = { value: number };
type data = {
  valueString: string;
  valueNumber: number;
  valueBoolean: boolean;
};

// Transforming input to a different data structure
class ExampleDifferentTypes extends Strukt.init({
  create: (input: input) => ({
    valueNumber: input.value,
    valueString: input.value.toString(),
    valueBoolean: input.value > 0,
  }),
}) {}

const instanceDifferentTypes = new ExampleDifferentTypes({ value: 42 });
console.log(instanceDifferentTypes); // { valueNumber: 42, valueString: '42', valueBoolean: true }
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

class MyError extends Strukt.error({
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

#### `init<data>(params?: config<data>): struktClass<data>`

The `init` function is a core feature of the `@ayka/domistrukt` library. It allows you to create a new class with structured initialization, providing a type-safe way to define and manage data structures.

- **data**: The type of the input data. This defines the shape of the data that the class will manage. **Note**: When a `create` function is provided generic **MUST NOT** be provided, the types are inferred from the function itself.

- **params**: Configuration options for initialization.
  - **create**: A function that transforms input data. This is useful for processing or validating input before it is used to initialize the class.
  - **asAccessor**: An array of keys that should be defined as accessors (getters and setters). This is useful for controlling access to certain properties, such as hiding sensitive information from logs.

**Example Usage:**

```typescript
type data = {
  valueString: string;
  valueNumber: number;
  valueBoolean: boolean;
};

// Basic initialization with type-safe properties
class Example extends Strukt.init<data>() {}
const instance = new Example({
  valueString: '1',
  valueNumber: 1,
  valueBoolean: true,
});
console.log(instance);

// Initialization with a custom create function
class ExampleWithCreate extends Strukt.init<data>({
  create: (input) => ({ ...input, valueNumber: input.valueNumber + 1 }),
}) {}
const instanceWithCreate = new ExampleWithCreate({
  valueString: '1',
  valueNumber: 1,
  valueBoolean: true,
});
console.log(instanceWithCreate);

// Using accessors to protect sensitive data
class ExampleWithAccessors extends Strukt.init<data>({
  asAccessor: ['apiKey'],
}) {}
const instanceWithAccessors = new ExampleWithAccessors({
  someKey: 'someValue',
  apiKey: '1234567890',
});
console.log(instanceWithAccessors); // { someKey: 'someValue', apiKey: [Getter/Setter] }
```

The `init` function is designed to be flexible and powerful, allowing you to define complex data structures with ease. By leveraging TypeScript's type system, it ensures that your data is always type-safe and consistent.

### Error Module

The Error Module in `@ayka/domistrukt` provides a robust framework for creating and managing errors with both static and dynamic messages. This module allows you to define error classes with customizable messages and data transformation capabilities.

#### `staticError(params?: staticErrorConfig): staticErrorClass`

Creates a static error class with a predefined message. This is useful for errors that have a consistent message across all instances.

- **params.message**: A static message or a function to generate the message. If a function is provided, it will be called without arguments to generate the message.

Returns a new error class extending `StruktErrorBase`.

**Example Usage:**

```typescript
// Static error with a predefined message
class MyStaticError extends Strukt.staticError({
  message: 'A static error occurred',
}) {}

throw new MyStaticError({ additionalInfo: 'Some context' });
// Output: Error with message "A static error occurred" and meta { additionalInfo: 'Some context' }
```

#### `error(params?: config)`

Creates a custom error class with dynamic message generation and optional data transformation. This is ideal for errors that need to convey specific information based on input data.

- **params.message**: A message or function to generate it. The function can use the processed data to create a detailed message.
- **params.create**: A function to transform input data into output data. This allows for preprocessing of input data before it is used in the error message.

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
