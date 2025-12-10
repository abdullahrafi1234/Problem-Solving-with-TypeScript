## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

### Keyof:

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

## 3. Explain the difference between any, unknown, and never types in TypeScript.

### Any Type:

`any` হলো TypeScript-এর সবচেয়ে “ফ্রি” টাইপ। এটা বলে দেয় যে এই ভ্যারিয়েবলের কোনো নির্দিষ্ট টাইপ নেই – এটা যেকোনো কিছু হতে পারে এবং এর ওপর যেকোনো অপারেশন করা যাবে।  
TypeScript এই টাইপ দেখলে পুরোপুরি টাইপ চেকিং বন্ধ করে দেয়।

```ts
let value: any;

value = 500;
value = true;
value = { name: "Rahim" };

value.toUpperCase(); // কোনো এরর নেই
value.length(); // কোনো এরর নেই
```

### Unknown Type:

`unknown` হলো এটাও যেকোনো মান ধরতে পারে, কিন্তু এটার ওপর কোনো অপারেশন করা যায়না যতক্ষণ না এটা প্রমাণীত হয় যে এটা আসলে কী টাইপ।

```ts
let userInput: unknown;

userInput = "Hello World";
userInput = 123;

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}
if (typeof userInput === "number") {
  console.log(userInput + 100);
}
```

### Never Type:

`never` মানে “এই টাইপের কোনো মান কখনো থাকতে পারে না”। এটা প্রধানত ব্যবহৃত হয় ফাংশন যেটা কখনো স্বাভাবিকভাবে রিটার্ন করে না তার ক্ষেত্রে।

```ts
function fail(msg: string): never {
  throw new Error(msg);
}
fail("Error 404");
```

## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

### Enum:

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

## 5. Provide an example of using union and intersection types in TypeScript.

### Union Type:

এটি এমন একটি Operator যেখানে একটি ভ্যালু একাধিক টাইপের মধ্যে যেকোনো একটি হতে পারে। এটি (|) অপারেটর দ্বারা চিহ্নিত করা হয়।

```ts
type StringOrNumber = string | number;

let id: StringOrNumber;
id = "123";
id = 456;
// id = true; //এইটা পসিবল না
```

### Intersection Type:

এটি একাধিক টাইপকে একত্রিত করে একটি নতুন টাইপ তৈরি করে যেখানে সেই নতুন টাইপে সমস্ত বিদ্যমান টাইপের বৈশিষ্ট্য থাকতে হবে। এটি (&) অপারেটর দ্বারা চিহ্নিত করা হয়।

```ts
interface Employee {
  name: string;
  startDate: Date;
}

interface Manager {
  department: string;
  employees: Employee[];
}
// ইন্টারসেকশন টাইপ: Employee এবং Manager উভয়ের বৈশিষ্ট্য থাকতে হবে
type TeamLead = Employee &
  Manager & {
    bonus: number;
  };

const lead: TeamLead = {
  name: "Rahim",
  startDate: new Date(),
  department: "Tech",
  employees: [],
  bonus: 50000,
};
// TeamLead-এর Employee, Manager এবং bonus-এর সব প্রপার্টি থাকতে হবে।
```
