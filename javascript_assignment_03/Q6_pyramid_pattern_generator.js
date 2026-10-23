"use strict";

// Q6. Pyramid Pattern Generator
// Set rowLimit to a positive integer to change the pyramid height.

const rowLimit = 5; // Default requested value.
let pattern = "";

for (let row = 1; row <= rowLimit; row++) {
  let rowText = "";

  for (let column = 1; column <= row; column++) {
    rowText += "* ";
  }

  pattern += rowText.trimEnd() + "\n";
}

console.log(pattern);

// Debugging / var comparison:
// If `let row` is replaced with `var row`, the loop still prints the same pattern
// because row is used synchronously inside the loop. However, `var` is function-
// scoped (or global at top level), while `let` is block-scoped.
// To observe the difference, compare `typeof row` after the loop when each version
// is run separately. With `let`, row is not available outside its loop block.
// With `var`, row remains accessible in the containing function/global scope.
// In strict mode, assigning to an undeclared loop variable throws ReferenceError.
