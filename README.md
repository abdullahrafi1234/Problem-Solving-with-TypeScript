## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

`keyof` একটা টাইপ অপারেটর যেটা কোনো অবজেক্ট টাইপের সব প্রপার্টি নাম (keys) নিয়ে একটা ইউনিয়ন টাইপ তৈরি করে।

```ts
type Person = {
  name: string;
  age: number;
  address: string;
};

type PersonKeys = keyof Person;
// Output => "name" | "age" | "address"
```

## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

`Enums` ব্যবহার করে একটি set এর named constants define করা যায়। এটি একটি `type` হিসেবে কাজ করে। TypeScript এ numeric এবং string enum উভয়ই আছে।

```ts
// Numeric enum
enum Direction {
  up = 200,
  down = 400,
}
console.log(Direction.up); // 200

// String enum
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

let current: Status = Status.Approved;
console.log(current); // "APPROVED"
```
