const READLINE = require('readline-sync');
let age = Number(READLINE.question(`What is your age? `));
let retirementAge = Number(READLINE.question(`At what age would you like to retire? `));
let currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retirementAge - age)}.`);
console.log(`You have only ${retirementAge - age} years of work to go!`);