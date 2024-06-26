// 1. Create a type alias for a union type that can be either a string or a boolean
type StringOrBoolean = string | boolean;

// Variable is declared of the new type created
let variable: StringOrBoolean;
variable = " This is my first time using TypeScript";
console.log(variable);
variable = true;
console.log(variable);