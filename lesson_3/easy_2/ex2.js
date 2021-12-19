let numbers = [1, 2, 3, 4, 5];

// Approach 1:
// let numbersCopy = numbers.slice();
// numbersCopy.reverse();
// console.log(numbersCopy); // [ 5, 4, 3, 2, 1 ]

// Approach 2: Spread Operator and slice method
let sortedArray = [...numbers].sort((a, b) => b - a); // compareFunction
console.log(sortedArray); // [ 5, 4, 3, 2, 1 ]

// // Bonus question answer
// let reversedNumbersArray = [];
// numbers.forEach(num => reversedNumbersArray.unshift(num));
// console.log(reversedNumbersArray);