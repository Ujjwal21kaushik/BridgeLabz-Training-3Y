// Q7. Smart Guessing Game
// A random secret number is generated; change userGuess to test the result.

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 24; // Test value: change this to any number from 1 to 50.

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  const difference = Math.abs(userGuess - secretNumber);

  if (difference <= 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber && (userGuess >= 1 && userGuess <= 50)) {
    console.log("Too high");
  } else if (userGuess < secretNumber && (userGuess >= 1 && userGuess <= 50)) {
    console.log("Too low");
  } else {
    console.log("Please enter a number between 1 and 50.");
  }
}

console.log(`Secret number (for testing): ${secretNumber}`);
