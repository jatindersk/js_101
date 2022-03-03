const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let integerToString = num => {
  if (num === 0) return '0';

  let str = '';
  while (num > 0) {
    str = DIGITS[num % 10] + str;
    num = (num - (num % 10)) / 10;
  }
  // console.log(str);
  return str;
};

function signedIntegerToString(num) {
  let sign = Math.sign(num);
  // console.log(sign);
  if (sign > 0) {
    return '+' + integerToString(num);
  } else if (sign < 0) {
    return '-' + integerToString(num * (-1));
  } else {
    return integerToString(num);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");