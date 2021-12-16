// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

let number1 = Number(readline.question("What's the first number? "));
let number2 = Number(readline.question("What's the second number? "));

let operation = readline.question('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide ');

let output;
if (operation === '1') {
  output = number1 + number2;
} else if (operation === '2') {
  output = number1 - number2;
} else if (operation === '3') {
  output = number1 * number2;
} else if (operation === '4') {
  output = number1 / number2;
}

console.log(`The result is: ${output}`);