"use strict";

// Q5. Hoisting Lab: The Sequence Trap
// The original sequence logs undefined, then "Game started", then undefined.
// `var score` is hoisted and initialized to undefined.
// `announce` is a function declaration and is callable before its source line.
// `let status` is in the temporal dead zone until its declaration is evaluated,
// so startGame() before that declaration would throw ReferenceError.

console.log(score); // undefined: var declaration hoisted, assignment not yet run.
announce();         // Function declaration is hoisted.
var score = 50;

function announce() {
  console.log("Game started");
}

let status = "ready";
startGame(); // "ready": status has been initialized before this call.

function startGame() {
  console.log(status);
}

// Corrected, easier-to-read version using declarations before use:
function runCorrectedSequence() {
  const correctedScore = 50;
  const correctedStatus = "ready";

  const announceArrow = () => console.log("Game started");
  const startGameArrow = () => console.log(correctedStatus);

  console.log(correctedScore);
  announceArrow();
  startGameArrow();
}

console.log("Corrected sequence:");
runCorrectedSequence();

// Arrow functions assigned to const are not callable before initialization,
// unlike function declarations.
