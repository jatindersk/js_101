let xor = (num1, num2) => {
  if ((num1 && !num2) || (!num1 && num2)) return true;
  return false;
};

console.log(xor(0, 5) === true);
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);