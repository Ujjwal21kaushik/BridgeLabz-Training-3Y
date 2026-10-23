// Q8. Dynamic Discount Evaluator
// Apply item-level discounts, then an extra overall discount if the original
// cart total is greater than ₹50,000.

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

// Use reduce() to calculate the original cart value.
const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

let itemDiscountTotal = 0;
const itemSummary = [];

// Loop through products and apply the category-specific discount.
for (const product of cart) {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }

  const discountAmount = product.price * discountRate;
  const discountedPrice = product.price - discountAmount;

  itemDiscountTotal += discountAmount;
  itemSummary.push({
    Item: product.item,
    "Original Price (₹)": product.price,
    "Discount (%)": `${discountRate * 100}%`,
    "Discount (₹)": discountAmount.toFixed(2),
    "Price After Discount (₹)": discountedPrice.toFixed(2)
  });
}

const subtotalAfterItemDiscounts = originalTotal - itemDiscountTotal;

// Extra 5% applies if the original total cart value exceeds ₹50,000.
const overallDiscountRate = originalTotal > 50000 ? 0.05 : 0;
const overallDiscountAmount = subtotalAfterItemDiscounts * overallDiscountRate;
const finalTotal = subtotalAfterItemDiscounts - overallDiscountAmount;

console.table(itemSummary);
console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`Item-level discounts: ₹${itemDiscountTotal.toFixed(2)}`);
console.log(`Extra overall discount: ${(overallDiscountRate * 100).toFixed(0)}%`);
console.log(`Extra discount amount: ₹${overallDiscountAmount.toFixed(2)}`);
console.log(`Final cart total: ₹${finalTotal.toFixed(2)}`);
