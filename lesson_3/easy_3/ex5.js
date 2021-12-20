// Approach 1:
// function isColorValid(color) {
//   return (color === "blue" || color === "green");
// }

// Approach 2:
// function isColorValid(color) {
//   return !(color !== "blue" && color !== "green");
// }

// Approach 3:
const isColorValid = color => ["blue", "green"].includes(color);

console.log(isColorValid("blue"));
console.log(isColorValid("green"));
console.log(isColorValid(5));
console.log(isColorValid("yellow"));