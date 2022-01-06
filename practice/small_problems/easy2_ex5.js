function computeResult() {
  const REDLINE = require('readline-sync');
  console.log(`==> Enter the first number:`);
  let num1 = Number(REDLINE.question());

  console.log(`==> Enter the second number:`);
  let num2 = Number(REDLINE.question());

  console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
  console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
  console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
  console.log(`==> ${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
  console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);
}

computeResult();