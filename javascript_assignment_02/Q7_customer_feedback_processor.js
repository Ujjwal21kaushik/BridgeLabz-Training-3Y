// Q7. Customer Feedback Processor
// Count words and flag feedback containing "bad" or "poor" (case-insensitive).

const feedback = "Great product! Fast delivery and amazing sound quality!";
const normalizedFeedback = feedback.toLowerCase();

// split() separates the feedback into words; filter() ignores empty entries.
const words = normalizedFeedback.trim().split(/\s+/);
const wordCount = words.length;

// includes() checks for the specified negative terms.
const containsNegativeFeedback =
  normalizedFeedback.includes("bad") ||
  normalizedFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!containsNegativeFeedback) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}
