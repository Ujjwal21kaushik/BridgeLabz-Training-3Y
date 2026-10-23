// Q2. Multi-Type Data Summary
// Store example values, identify their types, and print one formatted table.

const userName = "Ujjwal";
const age = 21;
const isStudent = true;
const skills = ["JavaScript", "Java", "Python"];
const userProfile = { city: "Mathura", role: "Student" };
const middleName = null;
let optionalValue;

const report = [
  { Label: "userName", Value: userName, Type: typeof userName },
  { Label: "age", Value: age, Type: typeof age },
  { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
  { Label: "skills", Value: skills.join(", "), Type: Array.isArray(skills) ? "array" : typeof skills },
  { Label: "userProfile", Value: JSON.stringify(userProfile), Type: typeof userProfile },
  { Label: "middleName", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
  { Label: "optionalValue", Value: String(optionalValue), Type: typeof optionalValue }
];

console.table(report);
