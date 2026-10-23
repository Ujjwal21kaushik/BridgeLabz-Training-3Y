"use strict";

// Q8. Strict Mode Showdown
// In strict mode, duplicate parameter names are a SyntaxError, undeclared assignment
// is a ReferenceError, and deleting an unqualified identifier is a SyntaxError.
// The invalid original function cannot run in this file because it fails parsing.
//
// Correct ES6 version:
function demo(firstValue, secondValue) {
  let total = 10; // Explicit declaration avoids accidental globals.
  console.log(`Arguments: ${firstValue}, ${secondValue}`);
  console.log(`Total: ${total}`);
  // Do not use `delete total`; local bindings cannot be deleted this way.
  total = firstValue + secondValue;
  console.log(`Updated total: ${total}`);
}

demo(5, 10);

// To compare without strict mode, create a separate classic script file (not an ES
// module) and test the original code there. In non-strict mode, duplicate parameter
// names may be allowed in ordinary functions, and `total = 10` may create a global
// property in a browser classic script. `delete total` still does not reliably
// delete a declared/global lexical binding; behavior depends on how it was created.
