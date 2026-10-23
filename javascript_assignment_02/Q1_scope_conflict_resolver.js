// Q1. Scope Conflict Resolver
// The bonus variable is global and can be accessed inside calculateSalary().

let bonus = 5000;

function calculateSalary(isPermanent) {
  // salary is local to this function.
  let salary = 40000;

  // Add the global bonus only for permanent employees.
  if (isPermanent === true) {
    salary += bonus;
  }

  console.log(`Permanent employee: ${isPermanent}`);
  console.log(`Total salary: ₹${salary}`);

  // A local variable can be changed without changing the global bonus.
  bonus += 0; // Demonstrates that bonus is accessible here; its value remains unchanged.
  console.log(`Global bonus inside function: ₹${bonus}`);
}

// Test both cases.
calculateSalary(true);
calculateSalary(false);

// The global bonus remains accessible outside the function.
console.log(`Global bonus outside function: ₹${bonus}`);

// Note: isPermanent is a function parameter (local to the function call).
// Changing it does not change the global bonus variable.
