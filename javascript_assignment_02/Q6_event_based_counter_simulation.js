// Q6. Event-Based Counter Simulation
// increment() and decrement() update a shared count variable.

let count = 0;

function increment() {
  count++;
  console.log(`Count after increment: ${count}`);
}

function decrement() {
  count--;
  console.log(`Count after decrement: ${count}`);
}

// Nested function: it can access and update count from the outer scope.
function runNestedCounterDemo() {
  function addTwo() {
    count += 2;
    console.log(`Count after nested addTwo(): ${count}`);
  }

  addTwo();
}

// Simulate button clicks by calling the functions.
increment();
increment();
decrement();
runNestedCounterDemo();
console.log(`Final count: ${count}`);
