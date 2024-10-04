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

<!-- ![npms.io](https://img.shields.io/npms-io/final-score/%40ayka%2Fdomistrukt) -->

## Overview

`@ayka/domistrukt` is a lightweight TypeScript library that simplifies the creation of structured data objects. It offers a type-safe and flexible API for defining and initializing classes with custom properties and behaviors, making it easier to manage complex data structures in TypeScript projects.

### Key Features

- **Type-safe Class Initialization**: Ensures that classes are initialized with the correct types.
- **Custom Property Management**: Allows creation and modification of properties with ease.
- **Versatile Input/Output Support**: Handles different input and output types seamlessly.
- **Automatic Accessor Generation**: Generates accessors for specified properties automatically.
- **Flexible Configuration**: Offers various configuration options to suit different needs.
- **Helper Functions**: Includes utilities for key selection, initializer creation, cloning, and property redefinition.

### Error Handling

The library also includes robust error handling features:

- **Custom Error Classes**: Create error classes with additional properties.
- **Type-safe Error Creation**: Define errors with custom input types.
- **Formatted Error Messages**: Define and format error messages based on input parameters.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
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

### Different Input and Output Types

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

### Creating Accessors

```typescript
class ExampleWithAccessors extends Strukt.init<data>({
  asAccessor: ['valueNumber'],
}) {}
const instanceWithAccessors = new ExampleWithAccessors({
  valueString: '1',
  valueNumber: 1,
  valueBoolean: true,
});
console.log(instanceWithAccessors.valueNumber);
```

### Static Error Usage

```typescript
class StaticErrorExample extends Strukt.staticError({
  message: 'This is a static error message',
}) {}
try {
  throw new StaticErrorExample();
} catch (error) {
  console.error(error.message); // Output: This is a static error message
}
```

### Custom Error with Dynamic Message

```typescript
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

### Custom Error with Transformation

```typescript
type errorInput = {
  errorCode: number;
};

type errorData = {
  errorCode: number;
  timestamp: Date;
};

class CustomErrorWithTransformation extends Strukt.error({
  create: (data: errorData) => ({
    errorCode: data.errorCode,
    timestamp: Date.now(),
  }),
}) {}

const instanceCustomErrorWithTransformation = new CustomErrorWithTransformation(
  {
    errorCode: 404,
  },
);
console.log(instanceCustomErrorWithTransformation);
console.log(instanceCustomErrorWithTransformation.data.errorCode); // 404
```

### Custom Error with Metadata, Cause, and Message Override

```typescript
import * as Strukt from '@ayka/domistrukt';

// Example demonstrating metadata, cause, and message override.
class CustomErrorWithMeta extends Strukt.staticError({
  message: 'Default static error message',
}) {}

try {
  const causeError = new Error('Original cause of the error');
  throw new CustomErrorWithMeta({
    message: 'Overridden error message',
    cause: causeError,
    additionalInfo: 'Some additional context',
  });
} catch (error) {
  console.error(error.message); // Output: Overridden error message
  console.error(error.meta); // Output: { additionalInfo: 'Some additional context' }
  console.error(error.cause); // Output: Error: Original cause of the error
}

// Example with dynamic error class
type errorData = {
  errorCode: number;
  errorMessage: string;
};

class DynamicErrorWithMeta extends Strukt.error<errorData>({
  message: (data) => `Error ${data.errorCode}: ${data.errorMessage}`,
}) {}

try {
  const causeError = new Error('Original cause of the error');
  throw new DynamicErrorWithMeta(
    { errorCode: 500, errorMessage: 'Internal Server Error' },
    {
      message: 'Overridden dynamic error message',
      cause: causeError,
      additionalInfo: 'Some additional context',
    },
  );
} catch (error) {
  console.error(error.message); // Output: Overridden dynamic error message
  console.error(error.data); // Output: { errorCode: 500, errorMessage: 'Internal Server Error' }
  console.error(error.meta); // Output: { additionalInfo: 'Some additional context' }
  console.error(error.cause); // Output: Error: Original cause of the error
}
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
