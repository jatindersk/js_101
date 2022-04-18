let integerToString = num => {
  let result = '';

  while (num > 0) {
    result = (num % 10) + result;
    num = (num - (num % 10)) / 10;
  }

  return result;
};

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"