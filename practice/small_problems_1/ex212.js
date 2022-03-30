function multiply(num1, num2 = num1) {
  return num1 * num2;
}

let square = arg => {
  return multiply(arg);
};

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true