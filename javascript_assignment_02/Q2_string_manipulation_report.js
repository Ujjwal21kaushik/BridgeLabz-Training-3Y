// Q2. String Manipulation Report
// Clean the product title, capitalize each word, then replace "pro".

const productName = " wireless headphones PRO ";

// Remove extra spaces at the beginning and end, and normalize case.
const trimmedName = productName.trim().toLowerCase();

// Capitalize the first letter of each word using split(), map(), and join().
const titleCaseName = trimmedName
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Replace "Pro" with the requested edition label.
const cleanedTitle = titleCaseName.replace("Pro", "Pro Edition");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
