const READLINE = require('readline-sync');

let noun = READLINE.question(`Enter a noun: `);
let verb = READLINE.question(`Enter a verb: `);
let adjective = READLINE.question(`Enter a adjective: `);
let adverb = READLINE.question(`Enter a adverb: `);

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} walks ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`);