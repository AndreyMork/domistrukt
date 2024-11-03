[**@ayka/domistrukt**](../../../README.md) • **Docs**

***

[@ayka/domistrukt](../../../globals.md) / [FlatObject](../README.md) / t

# Class: t\<t\>

Represents a flat structure of a nested object.

## Type Parameters

• **t** = `any`

## Constructors

### new t()

> **new t**\<`t`\>(`index`): [`t`](t.md)\<`t`\>

#### Parameters

• **index**: [`index`](../type-aliases/index.md)\<`t`\>

#### Returns

[`t`](t.md)\<`t`\>

#### Defined in

[src/FlatObject.ts:96](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L96)

## Accessors

### index

#### Get Signature

> **get** **index**(): [`index`](../type-aliases/index.md)\<`t`\>

##### Returns

[`index`](../type-aliases/index.md)\<`t`\>

#### Defined in

[src/FlatObject.ts:100](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L100)

***

### size

#### Get Signature

> **get** **size**(): `number`

##### Returns

`number`

#### Defined in

[src/FlatObject.ts:250](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L250)

## Methods

### entries()

> **entries**(): `List`\<`object`\>

#### Returns

`List`\<`object`\>

##### keys

> **keys**: [`keys`](../type-aliases/keys.md)

##### value

> **value**: `t`

#### Defined in

[src/FlatObject.ts:240](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L240)

***

### filter()

> **filter**(`fn`): [`t`](t.md)\<`t`\>

Filters the FlatObject based on a predicate function.

#### Parameters

• **fn**

The predicate function to filter values. It receives the value and keys as arguments.

#### Returns

[`t`](t.md)\<`t`\>

A new FlatObject with filtered values.

#### Example

```ts
const filtered = flatObject.filter((value, keys) => value > 1);
console.log(filtered.toJS()); // Outputs only properties with values greater than 1
```

#### Defined in

[src/FlatObject.ts:217](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L217)

***

### get()

> **get**\<`k`\>(`keys`): `k`

Retrieves a value from the FlatObject.

#### Type Parameters

• **k**

#### Parameters

• **keys**: `Iterable`\<`string`, `any`, `any`\>

The keys to retrieve the value for.

#### Returns

`k`

The value associated with the keys.

#### Example

```ts
const value = flatObject.get<number>(['a', 'b']);
console.log(value); // Outputs: 1
```

#### Defined in

[src/FlatObject.ts:112](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L112)

***

### has()

> **has**(`keys`): `boolean`

Checks if the FlatObject contains the specified keys.

#### Parameters

• **keys**: `Iterable`\<`string`, `any`, `any`\>

The keys to check for.

#### Returns

`boolean`

`true` if the keys exist, `false` otherwise.

#### Example

```ts
const exists = flatObject.has(['a', 'b']);
console.log(exists); // Outputs: true or false
```

#### Defined in

[src/FlatObject.ts:152](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L152)

***

### isEmpty()

> **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/FlatObject.ts:254](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L254)

***

### isNotEmpty()

> **isNotEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/FlatObject.ts:258](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L258)

***

### keys()

> **keys**(): `List`\<[`keys`](../type-aliases/keys.md)\>

#### Returns

`List`\<[`keys`](../type-aliases/keys.md)\>

#### Defined in

[src/FlatObject.ts:232](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L232)

***

### map()

> **map**\<`r`\>(`fn`): [`t`](t.md)\<`r`\>

Maps each value in the FlatObject to a new value.

#### Type Parameters

• **r**

#### Parameters

• **fn**

The function to map each value.

#### Returns

[`t`](t.md)\<`r`\>

A new FlatObject with mapped values.

#### Example

```ts
const mapped = flatObject.map<number>((value, keys) => value * 2);
```

#### Defined in

[src/FlatObject.ts:205](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L205)

***

### merge()

> **merge**\<`r`\>(`other`): [`t`](t.md)\<`t` \| `r`\>

Merges another FlatObject into this one.

#### Type Parameters

• **r**

#### Parameters

• **other**: [`t`](t.md)\<`r`\>

The other FlatObject to merge.

#### Returns

[`t`](t.md)\<`t` \| `r`\>

A new FlatObject with merged values.

#### Example

```ts
const merged = flatObject.merge(otherFlatObject);
```

#### Defined in

[src/FlatObject.ts:228](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L228)

***

### set()

> **set**(`keys`, `value`): [`t`](t.md)\<`t`\>

Sets a value in the FlatObject and returns a new instance.

#### Parameters

• **keys**: `Iterable`\<`string`, `any`, `any`\>

The keys to set the value for.

• **value**: `t`

The value to set.

#### Returns

[`t`](t.md)\<`t`\>

A new FlatObject with the updated value.

#### Example

```ts
const newFlat = flatObject.set(['a', 'b'], 2);
console.log(newFlat.get(['a', 'b'])); // Outputs: 2
```

#### Defined in

[src/FlatObject.ts:125](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L125)

***

### setMut()

> **setMut**(`keys`, `value`): [`t`](t.md)\<`t`\>

Sets a value in the FlatObject in place.

#### Parameters

• **keys**: `Iterable`\<`string`, `any`, `any`\>

The keys to set the value for.

• **value**: `t`

The value to set.

#### Returns

[`t`](t.md)\<`t`\>

The current FlatObject instance.

#### Example

```ts
flatObject.setMut(['a', 'b'], 2);
console.log(flatObject.get(['a', 'b'])); // Outputs: 2
```

#### Defined in

[src/FlatObject.ts:139](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L139)

***

### toJS()

> **toJS**\<`r`\>(): `r`

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

#### Defined in

[src/FlatObject.ts:164](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L164)

***

### transform()

> **transform**\<`r`\>(`fn`): [`t`](t.md)\<`r`\>

Transforms the FlatObject using a provided function.

#### Type Parameters

• **r**

#### Parameters

• **fn**

The function to transform the index.

#### Returns

[`t`](t.md)\<`r`\>

A new FlatObject with the transformed index.

#### Example

```ts
const transformed = flatObject.transform(index => index.map(value => value * 2));
```

#### Defined in

[src/FlatObject.ts:193](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L193)

***

### values()

> **values**(): `List`\<`t`\>

#### Returns

`List`\<`t`\>

#### Defined in

[src/FlatObject.ts:236](https://github.com/AndreyMork/domistrukt/blob/a3a0cb5c43a16ed6506fbb5003dcad527e48abe7/src/FlatObject.ts#L236)
