"use strict";

// Q1. Dynamic Data Parser
// Convert mixed API values into Number, Boolean, and String forms.
// Note: Number(" ") is 0, so whitespace-only strings are explicitly invalidated.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];
const detailedReport = [];

for (let index = 0; index < apiData.length; index++) {
  const originalValue = apiData[index];
  const numericValue = Number(originalValue);
  const booleanValue = Boolean(originalValue);
  const stringValue = String(originalValue);

  const isBlankString =
    typeof originalValue === "string" && originalValue.trim() === "";
  const isValidNumber = !Number.isNaN(numericValue) && !isBlankString;

  if (isValidNumber) {
    validNumericData.push(numericValue);
  } else {
    invalidNumericData.push(originalValue);
  }

  detailedReport.push({
    Index: index,
    Original: stringValue,
    NumberForm: Number.isNaN(numericValue) ? "NaN (invalid)" : numericValue,
    BooleanForm: booleanValue,
    StringForm: stringValue,
    Status: isValidNumber ? "Valid number" : "Invalid number"
  });
}

console.log("Detailed conversion report:");
console.table(detailedReport);
console.log("Valid numeric data:", validNumericData);
console.log("Invalid numeric data:", invalidNumericData);
