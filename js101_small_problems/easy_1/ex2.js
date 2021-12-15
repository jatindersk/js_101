// for (let num = 1; num < 100; num += 2) {
//   console.log(num);
// }

// Futher Exploration:

let rlSync = require('readline-sync');
let limit = Number(rlSync.question('Enter the limit for odd numbers to be logged. '));

for (let num = 1; num < limit; num += 1) {
  if (num % 2 === 1) console.log(num);
}