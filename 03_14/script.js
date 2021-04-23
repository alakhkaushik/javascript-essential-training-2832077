/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

console.log(
  "Number of books put in the everydayPack:",
  everydayPack.books.length
);
everydayPack.showBackpackBooks();

console.log(
  "putting this book in everydayPack:",
  'const book = new Book(1, "one", "ABC", "XYZ Company", new Date(), "mystery");'
);
let book = new Book(1, "one", "ABC", "XYZ Company", new Date(), "mystery");
everydayPack.putBook(book);

// book = new Book(
//   ({
//     id = 1,
//     name = "one",
//     author = "ABC",
//     publisher = "XYZ Company",
//     publishedOn = new Date(),
//     genre = "mystery",
//   } = {})
// );
// everydayPack.putBook(book);

console.log(
  "Current books inside the everydayPack:",
  everydayPack.books.length
);
everydayPack.showBackpackBooks();

console.log(
  "putting this book in everydayPack:",
  'const book = new Book(1, "one", "ABC", "XYZ Company", new Date(), "mystery");'
);
book = new Book(1, "two", "PQR", "ASD Company", new Date(), "mystery");
everydayPack.putBook(book);

console.log(
  "Current books inside the everydayPack:",
  everydayPack.books.length
);
everydayPack.showBackpackBooks();
