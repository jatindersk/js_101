let message = text => {
  console.log(`=> ${text}`);
};

const READLINE = require('readline-sync');

message(`Enter the first number:`);
let num1 = Number(READLINE.question());

message(`Enter the second number:`);
let num2 = Number(READLINE.question());

message(`${num1} + ${num2} = ${num1 + num2}`);
message(`${num1} - ${num2} = ${num1 - num2}`);
message(`${num1} * ${num2} = ${num1 * num2}`);
message(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
message(`${num1} % ${num2} = ${num1 % num2}`);
message(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`);