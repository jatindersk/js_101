const READLINE = require('readline-sync');

let prompt = text => console.log(`==> ${text}.`);

prompt(`Enter first number`);
let num1 = Number(READLINE.question());

prompt(`Enter second number`);
let num2 = Number(READLINE.question());

prompt(num1 + num2);
prompt(num1 - num2);
prompt(num1 * num2);
prompt(num1 / num2);
prompt(num1 % num2);
prompt(num1 ** num2);