// Q9. Random Math Quiz Generator
// Generate a question and use switch to calculate the correct answer.

const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (operator) {
  case "+":
    correctAnswer = firstNumber + secondNumber;
    break;
  case "-":
    correctAnswer = firstNumber - secondNumber;
    break;
  case "*":
    correctAnswer = firstNumber * secondNumber;
    break;
  case "/":
    correctAnswer = firstNumber / secondNumber;
    break;
  default:
    throw new Error("Unsupported operator.");
}

const formattedAnswer = operator === "/" ? correctAnswer.toFixed(2) : correctAnswer;

console.log(`Question: ${firstNumber} ${operator} ${secondNumber} = ?`);
console.log(`Correct answer: ${formattedAnswer}`);
