## ২. `keyof` কী কাজ করে?

`keyof` একটা টাইপ অপারেটর যেটা কোনো অবজেক্ট টাইপের সব প্রপার্টি নাম (keys) নিয়ে একটা ইউনিয়ন টাইপ তৈরি করে।

```ts
type Person = {
  name: string;
  age: number;
  address: string;
};

type PersonKeys = keyof Person;
// "name" | "age" | "address"
```
