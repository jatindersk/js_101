const READLINE = require(`readline-sync`);
let int1 = parseFloat(READLINE.question(`==> Enter first integer.\n`));
let int2 = parseFloat(READLINE.question(`==> Enter second integer.\n`));

console.log(`==> ${int1} + ${int2} = ${int1 + int2}`);
console.log(`==> ${int1} - ${int2} = ${int1 - int2}`);
console.log(`==> ${int1} * ${int2} = ${int1 * int2}`);
console.log(`==> ${int1} / $${int2} = ${Math.floor(int1 / int2)}`);
console.log(`==> ${int1} % ${int2} = ${int1 % int2}`);
console.log(`==> ${int2} ** ${int2} = ${Math.floor(int1 ** int2)}`);