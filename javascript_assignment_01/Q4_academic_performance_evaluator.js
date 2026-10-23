// Q4. Academic Performance Evaluator
// Change the marks array to test different student results.

const marks = [88, 92, 79, 85, 90];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const overallPercentage = (totalMarks / (marks.length * 100)) * 100;
const hasFailedSubject = marks.some(mark => mark < 35);

let result;

if (hasFailedSubject || overallPercentage < 50) {
  result = "Detained";
} else if (overallPercentage >= 85) {
  result = "Promoted with Distinction";
} else if (overallPercentage >= 50 && overallPercentage <= 84) {
  result = "Promoted";
} else {
  result = "Detained";
}

console.log("Marks:", marks);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${overallPercentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
