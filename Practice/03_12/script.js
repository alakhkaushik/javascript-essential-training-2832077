/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Person from "./Person.js";

const user = new Person("Alakh", "Bhatt", "alakhkaushik@gmail.com", "male");
console.log(user);
user.SignUp();
user.SignIn();

const myBackpack = new Backpack("officeBag", 20, "black", 3, 15, 15, false);
console.log("backpack details:", myBackpack);
