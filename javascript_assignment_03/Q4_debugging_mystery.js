"use strict";

// Q4. Debugging Mystery
// The original code throws ReferenceError because greeting is undeclared in strict mode.
// Fix: declare greeting with const inside the function.

function showMessage() {
  const greeting = "Welcome"; // Local watch variable; inspect it in the debugger.
  console.log(greeting);
}

showMessage();

// Debugging exercise (VS Code):
// 1. Set a breakpoint on the const greeting line.
// 2. Start Run and Debug (F5).
// 3. Add "greeting" to WATCH.
// 4. Step Over (F10), then inspect the Call Stack panel.
// Expected call stack while paused: showMessage -> program/script.
