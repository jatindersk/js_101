const READLINE = require('readline-sync');
let name = READLINE.question(`What is your name? `);

let greeting = name.includes("!") ? `HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?` : `Hello ${name}.`;
console.log(greeting);