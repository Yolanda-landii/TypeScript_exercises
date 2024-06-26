
class Calculator {
    // Define a method called add that takes two numbers, a and b, as parameters and returns their sum
    add(a: number, b: number): number {
        // Check if both a and b are valid numbers
        if (this.isValidNumber(a) && this.isValidNumber(b)) {
            // If they are, return the sum of a and b
            return a + b;
        } else {
            // If either a or b is not a valid number, throw an error
            throw new Error("Invalid input. Please provide valid numbers.");
        }
    }

    // Define a method called minus that takes two numbers, a and b, as parameters and returns their difference
    minus(a: number, b: number): number {
        // Check if both a and b are valid numbers
        if (this.isValidNumber(a) && this.isValidNumber(b)) {
            // If they are, return the difference of a and b
            return a - b;
        } else {
            // If either a or b is not a valid number, throw an error
            throw new Error("Invalid input. Please provide valid numbers.");
        }
    }

    // Define a method called divide that takes two numbers, a and b, as parameters and returns their division
    divide(a: number, b: number): number {
        // Check if both a and b are valid numbers
        if (this.isValidNumber(a) && this.isValidNumber(b)) {
            // Check if b is not zero (to avoid division by zero)
            if (b === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            // If they are, return the division of a by b
            return a / b;
        } else {
            // If either a or b is not a valid number, throw an error
            throw new Error("Invalid input. Please provide valid numbers.");
        }
    }

    // Define a method called multiply that takes two numbers, a and b, as parameters and returns their multiplication
    multiply(a: number, b: number): number {
        // Check if both a and b are valid numbers
        if (this.isValidNumber(a) && this.isValidNumber(b)) {
            // If they are, return the multiplication of a and b
            return a * b;
        } else {
            // If either a or b is not a valid number, throw an error
            throw new Error("Invalid input. Please provide valid numbers.");
        }
    }

    // Define a private method called isValidNumber that takes a parameter num and checks if it is a valid number
    private isValidNumber(num: any): boolean {
        // Check if num is of type number and not NaN (Not a Number)
        return typeof num === "number" && !isNaN(num);
    }
}

// Create an instance of the Calculator class called calculator
const calculator = new Calculator();

// Use the calculator to perform arithmetic operations and log the results to the console
console.log(calculator.add(5, 3)); 
console.log(calculator.minus(5, 3)); 
console.log(calculator.divide(10, 2)); 
console.log(calculator.multiply(5, 3)); 
