"use strict";

// Q9. JSON Audit
// Set a breakpoint inside the loop to observe rawEntry, parsedEntry, and errors.

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];

for (let index = 0; index < rawData.length; index++) {
  const rawEntry = rawData[index];
  const lineNumber = index + 1;

  try {
    const parsedEntry = JSON.parse(rawEntry);

    if (!Object.prototype.hasOwnProperty.call(parsedEntry, "user")) {
      throw new Error("Missing required key: user");
    }
    if (!Object.prototype.hasOwnProperty.call(parsedEntry, "age")) {
      throw new Error("Missing required key: age");
    }

    const age = Number(parsedEntry.age);
    if (!Number.isFinite(age)) {
      throw new TypeError("Age must be a valid number");
    }

    cleanData.push({ ...parsedEntry, age });
    console.log(`Line ${lineNumber}: valid JSON record`);
  } catch (error) {
    auditErrors.push({ lineNumber, message: error.message });
    console.log(`Line ${lineNumber} error: ${error.message}`);
  }
}

const under18Users = cleanData.filter(user => user.age < 18);

console.log("Clean data:", cleanData);
console.log("Users under 18:", under18Users);
console.log("Audit errors:");
console.table(auditErrors);
console.log(`Valid records: ${cleanData.length}`);
console.log(`Invalid records: ${auditErrors.length}`);
