const READLINE = require(`readline-sync`);

let computeSum = int => {
  let total = 0;

  for (let num = 1; num <= int; num += 1) {
    total += num;
  }

  return total;
};

let computeProduct = int => {
  let total = 1;

  for (let num = 1; num <= int; num += 1) {
    total *= num;
  }

  return total;
};

console.log(`Please enter an integer greater than 0: `);
let int = parseInt(READLINE.prompt(), 10);

console.log(`Enter "s" to compute the sum, or "p" to compute the product. `);
let operation = READLINE.prompt();

if (operation === 's') {
  let sum = computeSum(int);
  console.log(`The sum of the integers between 1 and ${int} is ${sum}.`);
} else if (operation === 'p') {
  let product = computeProduct(int);
  console.log(`The product of the integers between 1 and ${int} is ${product}.`);
} else {
  console.log(`Oops, invalid operation demanded!`);
}