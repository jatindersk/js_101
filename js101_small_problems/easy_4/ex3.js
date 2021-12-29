const READLINE = require('readline-sync');

console.log(`What is your age? `);
let age = Number(READLINE.prompt());

console.log(`At what age would you like to retire? `);
let retirementAge = Number(READLINE.prompt());

let today = new Date();
let currentYear = today.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retirementAge - age)}.`);