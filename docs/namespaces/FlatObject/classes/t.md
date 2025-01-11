[**@ayka/domistrukt**](../../../README.md)

***

[@ayka/domistrukt](../../../globals.md) / [FlatObject](../README.md) / t

# Class: t\<t\>

Defined in: [src/FlatObject.ts:93](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L93)

Represents a flat structure of a nested object.

## Type Parameters

• **t** = `any`

## Constructors

### new t()

> **new t**\<`t`\>(`index`): [`t`](t.md)\<`t`\>

Defined in: [src/FlatObject.ts:96](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L96)

#### Parameters

##### index

[`index`](../type-aliases/index.md)\<`t`\>

#### Returns

[`t`](t.md)\<`t`\>

## Accessors

### index

#### Get Signature

> **get** **index**(): [`index`](../type-aliases/index.md)\<`t`\>

Defined in: [src/FlatObject.ts:100](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L100)

##### Returns

[`index`](../type-aliases/index.md)\<`t`\>

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [src/FlatObject.ts:250](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L250)

##### Returns

`number`

## Methods

### entries()

> **entries**(): `List`\<\{ `keys`: [`keys`](../type-aliases/keys.md); `value`: `t`; \}\>

Defined in: [src/FlatObject.ts:240](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L240)

#### Returns

`List`\<\{ `keys`: [`keys`](../type-aliases/keys.md); `value`: `t`; \}\>

***

### filter()

> **filter**(`fn`): [`t`](t.md)\<`t`\>

Defined in: [src/FlatObject.ts:217](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L217)

Filters the FlatObject based on a predicate function.

#### Parameters

##### fn

(`value`, `keys`) => `boolean`

The predicate function to filter values. It receives the value and keys as arguments.

#### Returns

[`t`](t.md)\<`t`\>

A new FlatObject with filtered values.

#### Example

```ts
const filtered = flatObject.filter((value, keys) => value > 1);
console.log(filtered.toJS()); // Outputs only properties with values greater than 1
```

***

### get()

> **get**\<`k`\>(`keys`): `k`

Defined in: [src/FlatObject.ts:112](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L112)

Retrieves a value from the FlatObject.

#### Type Parameters

• **k**

#### Parameters

##### keys

`Iterable`\<`string`\>

The keys to retrieve the value for.

#### Returns

`k`

The value associated with the keys.

#### Example

```ts
const value = flatObject.get<number>(['a', 'b']);
console.log(value); // Outputs: 1
```

***

### has()

> **has**(`keys`): `boolean`

Defined in: [src/FlatObject.ts:152](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L152)

Checks if the FlatObject contains the specified keys.

#### Parameters

##### keys

`Iterable`\<`string`\>

The keys to check for.

#### Returns

`boolean`

`true` if the keys exist, `false` otherwise.

#### Example

```ts
const exists = flatObject.has(['a', 'b']);
console.log(exists); // Outputs: true or false
```

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/FlatObject.ts:254](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L254)

#### Returns

`boolean`

***

### isNotEmpty()

> **isNotEmpty**(): `boolean`

Defined in: [src/FlatObject.ts:258](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L258)

#### Returns

`boolean`

***

### keys()

> **keys**(): `List`\<[`keys`](../type-aliases/keys.md)\>

Defined in: [src/FlatObject.ts:232](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L232)

#### Returns

`List`\<[`keys`](../type-aliases/keys.md)\>

***

### map()

> **map**\<`r`\>(`fn`): [`t`](t.md)\<`r`\>

Defined in: [src/FlatObject.ts:205](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L205)

Maps each value in the FlatObject to a new value.

#### Type Parameters

• **r**

#### Parameters

##### fn

(`value`, `keys`) => `r`

The function to map each value.

#### Returns

[`t`](t.md)\<`r`\>

A new FlatObject with mapped values.

#### Example

```ts
const mapped = flatObject.map<number>((value, keys) => value * 2);
```

***

### merge()

> **merge**\<`r`\>(`other`): [`t`](t.md)\<`t` \| `r`\>

Defined in: [src/FlatObject.ts:228](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L228)

Merges another FlatObject into this one.

#### Type Parameters

• **r**

#### Parameters

##### other

[`t`](t.md)\<`r`\>

The other FlatObject to merge.

#### Returns

[`t`](t.md)\<`t` \| `r`\>

A new FlatObject with merged values.

#### Example

```ts
const merged = flatObject.merge(otherFlatObject);
```

***

### set()

> **set**(`keys`, `value`): [`t`](t.md)\<`t`\>

Defined in: [src/FlatObject.ts:125](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L125)

Sets a value in the FlatObject and returns a new instance.

#### Parameters

##### keys

`Iterable`\<`string`\>

The keys to set the value for.

##### value

`t`

The value to set.

#### Returns

[`t`](t.md)\<`t`\>

A new FlatObject with the updated value.

#### Example

```ts
const newFlat = flatObject.set(['a', 'b'], 2);
console.log(newFlat.get(['a', 'b'])); // Outputs: 2
```

***

### setMut()

> **setMut**(`keys`, `value`): [`t`](t.md)\<`t`\>

Defined in: [src/FlatObject.ts:139](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L139)

Sets a value in the FlatObject in place.

#### Parameters

##### keys

`Iterable`\<`string`\>

The keys to set the value for.

##### value

`t`

The value to set.

#### Returns

[`t`](t.md)\<`t`\>

The current FlatObject instance.

#### Example

```ts
flatObject.setMut(['a', 'b'], 2);
console.log(flatObject.get(['a', 'b'])); // Outputs: 2
```

***

### toJS()

> **toJS**\<`r`\>(): `r`

Defined in: [src/FlatObject.ts:164](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L164)

Converts the FlatObject back to a regular JavaScript object.

#### Type Parameters

• **r**

The type of the resulting JavaScript object.

#### Returns

`r`

A JavaScript object representation of the FlatObject.

#### Example

```ts
const obj = flatObject.toJS();
console.log(obj); // Outputs: { a: { b: 1 } }
```

***

### transform()

> **transform**\<`r`\>(`fn`): [`t`](t.md)\<`r`\>

Defined in: [src/FlatObject.ts:193](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L193)

Transforms the FlatObject using a provided function.

#### Type Parameters

• **r**

#### Parameters

##### fn

(`index`) => [`index`](../type-aliases/index.md)\<`r`\>

The function to transform the index.

#### Returns

[`t`](t.md)\<`r`\>

A new FlatObject with the transformed index.

#### Example

```ts
const transformed = flatObject.transform(index => index.map(value => value * 2));
```

***

### values()

> **values**(): `List`\<`t`\>

Defined in: [src/FlatObject.ts:236](https://github.com/AndreyMork/domistrukt/blob/8b5cf3c2b6165986c4aa42ad9bdd7f6c43c22c84/src/FlatObject.ts#L236)

#### Returns

`List`\<`t`\>
