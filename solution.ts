// Problem-1

const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return (value = !value);
  }
};

// Problem-2
const getLength = (value: string | number[]) => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

// Problem-3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// Problem-4
