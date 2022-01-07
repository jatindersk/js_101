const READLINE = require('readline-sync');

let age = READLINE.question(`What is your age? `);
let retirementAge = READLINE.question(`At what age would you like to retire? `);
let yearsOfWork = retirementAge - age;
let date = new Date();

console.log(`It's ${date.getFullYear()}. You will retire in ${date.getFullYear() + yearsOfWork}.`);
console.log(`You have only ${yearsOfWork} years of work to go!`);

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!