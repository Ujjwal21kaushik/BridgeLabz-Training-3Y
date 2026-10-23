// Q8. Employee Salary Projection
// Project salary over five years using an annual increment percentage.

const currentSalary = 50000;
const annualIncrementRate = 8;
let projectedSalary = currentSalary;
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
  projectedSalary *= 1 + annualIncrementRate / 100; // Apply yearly increment.
  projectedSalary = Math.round(projectedSalary);

  salaryProjection.push({
    Year: year,
    "Annual Salary (₹)": projectedSalary
  });
}

console.table(salaryProjection);
