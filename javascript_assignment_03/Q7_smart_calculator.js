"use strict";

// Q7. Smart Calculator
// Choose one operation to run. Change `operation` to test other cases.

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;
const operation = "divide";

class InvalidOperationError extends Error {
  constructor(operationName) {
    super(`Invalid operation: ${operationName}`);
    this.name = "InvalidOperationError";
  }
}

let result;

try {
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "divide":
      if (num2 === 0) {
        const error = new Error("Cannot divide by zero.");
        error.name = "DivisionByZeroError";
        throw error;
      }
      result = num1 / num2;
      break;
    case "power":
      result = Math.pow(num1, num2);
      break;
    case "root":
      if (num1 < 0) {
        const error = new Error("Cannot calculate the real square root of a negative number.");
        error.name = "NegativeRootError";
        throw error;
      }
      result = Math.sqrt(num1);
      break;
    case "subtract":
      result = num1 - num2;
      break;
    default:
      throw new InvalidOperationError(operation);
  }

  console.log("Calculator Summary");
  console.log("------------------");
  console.log(`Operation: ${operation}`);
  console.log(`Input numbers: ${num1}, ${num2}`);
  console.log(`Result: ${result}`);
} catch (error) {
  console.log("Calculator Summary");
  console.log("------------------");
  console.log(`Operation: ${operation}`);
  console.log(`Error type: ${error.name}`);
  console.log(`Message: ${error.message}`);
}

// `operations` lists the supported operations and can be used to validate input.
console.log("Supported operations:", operations.join(", "));
