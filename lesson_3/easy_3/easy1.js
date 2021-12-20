let numbers = [1, 2, 3, 4];

// Approach 1:
// numbers.length = 0;
// console.log(numbers);

// Approach 2:
// numbers.splice(0);
// console.log(numbers);

// Approach 3:
// while (true) {
//   numbers.pop();
//   if (numbers.length === 0) break;
// }
// console.log(numbers);

// Approach 4:
while (numbers.length !== 0) {
  numbers.pop();
}
console.log(numbers);