const READLINE = require('readline-sync');
let numArr = [];

console.log(`Enter the 1st number:`);
let num1 = READLINE.question();

console.log(`Enter the 2nd number:`);
let num2 = READLINE.question();

console.log(`Enter the 3rd number:`);
let num3 = READLINE.question();

console.log(`Enter the 4th number:`);
let num4 = READLINE.question();

console.log(`Enter the 5th number:`);
let num5 = READLINE.question();

console.log(`Enter the last number:`);
let num6 = READLINE.question();

numArr.push(num1, num2, num3, num4, num5);

// if (numArr.includes(num6)) {
//   console.log(`The number ${num6} appears in ${numArr.join()}.`);
// } else {
//   console.log(`The number ${num6} does not appear in ${numArr.join()}.`);
// }

// Further Exploration:
// // Approach 1:
// let isValid = numArr.some(num => {
//   return num > 25;
// });

// Approach 2:
let isValid = numArr.find(num => num > 25);

if (isValid) {
  console.log(`There is a number in ${numArr.join()} greater than 25.`);
} else {
  console.log(`There is no number in ${numArr.join()} greater than 25.`);
}