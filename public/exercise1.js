"use strict";
// 1. Declare a variable that holds a string value without explicitly stating its type
let myString = "Hello, TypeScript!";
// 2. Declare a variable that holds a number value and explicitly state its type
let myNumber = 23;
// 3. Declare a variable that can hold a value of any type
let myAny = "This can be anything";
myAny = "I am";
// 4. Declare a variable that can hold either a string or a number
let myStringOrNumber = "Could be a string or a number";
myStringOrNumber = "years old.";
console.log(`${myString}, ${myAny} ${myNumber} ${myStringOrNumber}`);
