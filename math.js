// math.js
function add(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is undefined");
  }
  return a / b;
}

// if (require.main === module) {
//   console.log("Math engine initialized.");
//   console.log(`10 + 25 = ${add(10, 25)}`);
//   console.log(`40 / 8 = ${divide(40, 8)}`);
// }

module.exports = { add, divide };