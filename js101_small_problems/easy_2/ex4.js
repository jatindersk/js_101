// let multiply = (num1, num2) => num1 * num2;

// let square = num => multiply(num, num);

// Further Exploration:
let multiply = (num1, num2) => Math.pow(num1, num2);

let square = (base, pow) => multiply(base, pow);

console.log(square(5, 3) === 125); // logs true
console.log(square(-8, 4) === 4096); // logs true

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true