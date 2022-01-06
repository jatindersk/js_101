function xor(num1, num2) {
  return (num1 && !num2) || (num2 && !num1) ? true : false;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);