"use strict";
// import { Person } from "./exercise4";
// import { Calculator } from "./exercise5";
// 1. Write a function that takes two numbers as parameters and returns their sum
function sum(a, b) {
    return a + b;
}
// 2. Write a function that returns a fixed number
function fixedNumber() {
    return 23;
}
// 3. Write a function that takes a string and an optional boolean parameter. If the boolean is true, return the string in uppercase; otherwise, return it in lowercase.
function formatString(input, toUpperCase) {
    if (toUpperCase) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
// Example usage and printing the results
console.log(sum(10, 5));
console.log(fixedNumber());
console.log(formatString("Hello Typescript", true));
console.log(formatString("Hello Typescript"));
