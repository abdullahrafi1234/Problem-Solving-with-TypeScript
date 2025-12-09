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

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);

// Problem-4

type Book = {
  title: string;
  rating: number;
}[];

const filterByRating = (books: Book): Book => {
  const booksValue = books.filter((book) => {
    return book.rating >= 4;
  });
  return booksValue;
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// Problem-5

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[];

const filterActiveUsers = (users: User): User => {
  return users.filter((user) => {
    return user.isActive;
  });
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// Problem-6
