const READLINE = require(`readline-sync`);

let length = parseInt(READLINE.question(`Enter the length of the room in meters:`), 10);
let width = parseInt(READLINE.question(`Enter the width of the room in meters:`), 10);

console.log(`The area of the room is ${(length * width).toFixed(2)} square meters (${((length * width) * 10.7639).toFixed(2)} square feet).`);