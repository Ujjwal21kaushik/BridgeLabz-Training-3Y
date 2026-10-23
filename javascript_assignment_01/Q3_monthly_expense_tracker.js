// Q3. Monthly Expense Tracker
// Add the five expense categories, calculate the average, then add 10% tax.

const expenses = {
  food: 4500,
  travel: 1200,
  rent: 8000,
  bills: 1500,
  leisure: 1000
};

let totalExpense = 0;

for (const category in expenses) {
  totalExpense += expenses[category]; // Assignment operator adds each category.
}

const averageExpense = totalExpense / Object.keys(expenses).length;
const taxAmount = totalExpense * 0.10;
totalExpense += taxAmount; // Add 10% tax to the total.
const finalAmount = totalExpense;

console.log("Expenses by category:", expenses);
console.log(`Average expense per category: ₹${averageExpense.toFixed(2)}`);
console.log(`Total before tax: ₹${(finalAmount - taxAmount).toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
