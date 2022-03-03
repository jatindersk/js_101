const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let integerToString = num => {
  if (num === 0) return '0';

  let str = '';
  while (num > 0) {
    str = DIGITS[num % 10] + str;
    num = (num - (num % 10)) / 10;
  }
  console.log(typeof str);
  return str;
};

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"