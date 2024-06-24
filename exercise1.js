// 1. Declare a variable that holds a string value without explicitly stating its type
var myString = "Hello, TypeScript!";
// 2. Declare a variable that holds a number value and explicitly state its type
var myNumber = 42;
// 3. Declare a variable that can hold a value of any type
var myAny = "This can be anything";
myAny = "I am";
// 4. Declare a variable that can hold either a string or a number
var myStringOrNumber = "Could be a string or a number";
myStringOrNumber = "years old.";
console.log("".concat(myString, ", ").concat(myAny, " ").concat(myNumber, " ").concat(myStringOrNumber));
