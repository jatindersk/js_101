const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

// modify numbers:
numbers.push('Jatin');

// modify num1
num1.push(3);
console.log(num1);

console.log(numbers);
// results in [[1, 4], 2, [3]]