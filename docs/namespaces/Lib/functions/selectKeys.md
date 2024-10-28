[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [Lib](../README.md) / selectKeys

# Function: selectKeys()

> **selectKeys**\<`t`, `key`\>(`target`, `keys`): \{ -readonly \[k in string \| number \| symbol\]: t\[k\] \}

Selects specified keys from a target object in a type-safe manner.

## Type Parameters

• **t**

The type of the target object.

• **key** *extends* `string` \| `number` \| `symbol` = keyof `t`

The type of the keys to select, extending keyof t.

## Parameters

• **target**: `t`

The target object to select keys from.

• **keys**: `Iterable`\<`key`, `any`, `any`\>

An iterable of keys to select.

## Returns

\{ -readonly \[k in string \| number \| symbol\]: t\[k\] \}

An object with the selected keys and their values.

## Examples

```ts
const obj = { a: 1, b: 2, c: 3 };
const result = selectKeys(obj, ['a', 'c']);
console.log(result); // Output: { a: 1, c: 3 }
```

```ts
class Person {
  constructor(public name: string, public age: number, private ssn: string) {}
  toObject() {
    return selectKeys(this, ['name', 'age']);
  }
}
const person = new Person('John', 30, '123-45-6789');
const result = person.toObject();
console.log(result); // Output: { name: 'John', age: 30 }
```

## Defined in

[src/Lib.ts:35](https://github.com/AndreyMork/domistrukt/blob/6bf1571936bc40cdb9430004c5150bf2a16cf455/src/Lib.ts#L35)
