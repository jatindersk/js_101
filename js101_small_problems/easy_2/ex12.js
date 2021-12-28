const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let integerToString = num => {
  let numStr = '';

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    numStr = DIGITS[remainder] + numStr;
  } while (num > 0);

  return numStr;
};

let signedIntegerToString = num => {
  let sign = Math.sign(num);
  if (sign === -1) {
    return (('-') + integerToString((-1 * num)));
  } else if (sign === +1) {
    return (('+') + integerToString(num));
  } else {
    return sign + '';
  }
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");