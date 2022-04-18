let integerToString = num => {
  let result = '';

  while (num > 0) {
    result = (num % 10) + result;
    num = (num - (num % 10)) / 10;
  }
  return result;
};

let signedIntegerToString = num => {
  let sign = Math.sign(num);

  if (sign === 1) return '+' + integerToString(num);
  else if (sign === 0) return '0';
  else return '-' + integerToString(num * -1);
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");