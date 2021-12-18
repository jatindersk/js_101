const READLINE = require('readline-sync');

let inputNum = Number(READLINE.question(`Please enter an integer greater than 0: `));
let operation = READLINE.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

let sum = 0;
let product = 1;
let iniVal = 1;

while (iniVal <= inputNum) {
  if (operation.toLowerCase() === 's') {
    sum += iniVal;
    iniVal += 1;
  } else {
    product *= iniVal;
    iniVal += 1;
  }
}

let message = (operation.toLowerCase() === 's') ?
  `The sum of the integers between 1 and ${inputNum} is ${sum}.` : `The product of the integers between 1 and ${inputNum} is ${product}.`;

console.log(message);