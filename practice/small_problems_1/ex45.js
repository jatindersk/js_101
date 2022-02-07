const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}:`);
}

prompt(`Enter the first number`);
let firstNum = parseFloat(READLINE.question());

prompt(`Enter the second number`);
let secondNum = parseFloat(READLINE.question());

console.log(`==> ${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
console.log(`==> ${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
console.log(`==> ${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
console.log(`==> ${firstNum} / ${secondNum} = ${Math.floor(firstNum / secondNum)}`);
console.log(`==> ${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
console.log(`==> ${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);