// Q4. Array Performance Analyzer
// Generate 8 random integer scores between 30 and 100 (inclusive).

const scores = Array.from(
  { length: 8 },
  () => Math.floor(Math.random() * 71) + 30
);

// Use map() to prepare a readable list of scores.
const labeledScores = scores.map((score, index) => ({
  Student: index + 1,
  Score: score
}));

// Use spread syntax with Math.max() and Math.min() to find extremes.
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Use reduce() to calculate the total and average.
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

// Use filter() to count students who passed (score >= 50).
const passedScores = scores.filter(score => score >= 50);

console.log("Individual scores:");
console.table(labeledScores);
console.log(`
Performance Summary
-------------------
Scores: ${scores.join(", ")}
Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed: ${passedScores.length} out of ${scores.length}
`);
