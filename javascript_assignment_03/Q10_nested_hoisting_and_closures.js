"use strict";

// Q10. Nested Hoisting and Closures
// Expected output for the original structure: undefined, then 5.
// The outer `count` is hoisted but starts as undefined when first logged.
// The inner function declares its own `var count`, which shadows the outer count.

function outer() {
  console.log(count); // undefined: outer count exists but is not assigned yet.
  var count = 5;

  function inner() {
    console.log(count); // undefined: inner's own var count is hoisted here.
    var count = 10;
  }

  inner();
  console.log(`Outer count after inner(): ${count}`); // 5; inner's count is separate.
}

outer();

// Arrow version: removing the inner `var count` makes the arrow read the outer count.
// This demonstrates lexical scope; it logs 5 rather than undefined.
function outerWithArrow() {
  var count = 5;

  const innerArrow = () => {
    console.log(`Arrow reads outer count: ${count}`);
  };

  innerArrow();
}

outerWithArrow();

// Debug session idea:
// Set breakpoints at both console.log lines inside outer()/inner().
// Step into inner() (F11), inspect the Call Stack (inner -> outer -> script),
// then step out (Shift+F11) and observe the outer count is still 5.
