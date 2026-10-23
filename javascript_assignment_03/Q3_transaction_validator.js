"use strict";

// Q3. Transaction Validator
// In VS Code, set a breakpoint inside the for loop and inspect transaction,
// transactionIndex, validTransactions, and invalidTransactions.

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTransactions = [];
const invalidTransactions = [];

for (let transactionIndex = 0; transactionIndex < transactions.length; transactionIndex++) {
  const transaction = transactions[transactionIndex];

  try {
    if (transaction === null || transaction === undefined) {
      const error = new Error("Transaction entry is null");
      error.name = "NullTransactionError";
      throw error;
    }

    if (transaction.id === undefined || transaction.amount === undefined) {
      const error = new Error("Transaction is missing id or amount");
      error.name = "MissingFieldError";
      throw error;
    }

    if (transaction.amount < 0) {
      const error = new Error("Transaction amount cannot be negative");
      error.name = "NegativeAmountError";
      throw error;
    }

    validTransactions.push(transaction);
    console.log(`Transaction ${transaction.id}: valid`);
  } catch (error) {
    invalidTransactions.push({
      index: transactionIndex,
      transaction,
      errorType: error.name,
      message: error.message
    });
    console.log(`Transaction at index ${transactionIndex}: ${error.name} — ${error.message}`);
  }
}

console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:");
console.table(invalidTransactions.map(entry => ({
  Index: entry.index,
  ErrorType: entry.errorType,
  Message: entry.message
})));
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);
