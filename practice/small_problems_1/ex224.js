const READLINE = require(`readline-sync`);
let age = READLINE.question(`What is your age? `);
let retirementAge = READLINE.question(`At what age would you like to retire? `);

const date = new Date(`March, 31, 2022`);
let currentYear = date.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retirementAge - age)}.`);
console.log(`You have only ${retirementAge - age} years of work to go!`);