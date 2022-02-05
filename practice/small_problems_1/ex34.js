const READLINE = require('readline-sync');
console.log(`What is your age? `);
let age = READLINE.question();

console.log(`At what age would you like to retire? `);
let retirementAge = READLINE.question();
const date = new Date();

console.log(`It's ${new Date().getFullYear()}. You will retire in ${date.getFullYear() + (retirementAge - age)}`);
console.log(`You have only ${retirementAge - age} years of work to go!`);