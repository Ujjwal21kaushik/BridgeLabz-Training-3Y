// Q1. Personalized Login Greeting
// Choose a name and use the current hour to display a suitable greeting.

const userName = "Ujjwal";
const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
