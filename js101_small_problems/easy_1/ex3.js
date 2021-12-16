// for (let num = 2; num < 100; num += 2) {
//   console.log(num);
// }

// Alternate sol:

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}