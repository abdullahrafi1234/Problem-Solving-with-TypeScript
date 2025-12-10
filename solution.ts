type Value = string | number | boolean;

const formatValue = (value: Value): Value => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | number[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

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

type Books = {
  title: string;
  rating: number;
};

const filterByRating = (books: Books[]): Books[] => {
  const booksValue = books.filter((book) => {
    return book.rating >= 4;
  });
  return booksValue;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => {
    return user.isActive;
  });
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  if (book.isAvailable === true) {
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: Yes`;
  } else {
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: No`;
  }
};

const getUniqueValues = (array1: number[], array2: number[]): number[] => {
  const combinedList: number[] = [...array1, ...array2];

  const uniqueList: number[] = [];

  for (const list of combinedList) {
    if (!uniqueList.includes(list)) {
      uniqueList.push(list);
    }
  }
  return uniqueList;
};

type Products = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Products[]): number => {
  const totalPrice = products.reduce((preValue, CrrValue) => {
    const total = CrrValue.price * CrrValue.quantity;

    const discountPrice = CrrValue.discount
      ? total - (total * CrrValue.discount) / 100
      : total;

    return preValue + discountPrice;
  }, 0);

  return totalPrice;
};
