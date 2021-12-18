const READLINE = require('readline-sync');

let billAmt = parseFloat(READLINE.question(`What is the bill? `));

let tipRate = parseFloat(READLINE.question(`What is the tip percentage? `));

let tipAmt = (tipRate / 100) * billAmt;
let totalBill = billAmt + tipAmt;

console.log(`The tip is $${tipAmt.toFixed(2)}`);
console.log(`The tip is $${totalBill.toFixed(2)}`);