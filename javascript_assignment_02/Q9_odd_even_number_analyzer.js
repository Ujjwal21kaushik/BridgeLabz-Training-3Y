// Q9. Odd–Even Number Analyzer
// Build the range 1–30 using a loop, classify each number, and store results.

const numbers = [];
const results = [];

for (let number = 1; number <= 30; number++) {
  numbers.push(number);
}

for (const number of numbers) {
  let classification;

  if (number % 3 === 0 && number % 5 === 0) {
    classification = "FizzBuzz";
  } else if (number % 2 === 0) {
    classification = "Even";
  } else {
    classification = "Odd";
  }

  results.push({ Number: number, Result: classification });
}

console.table(results);
