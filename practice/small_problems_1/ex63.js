const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

function hexadecimalToInteger(numStr) {
  let digitsArr = numStr.split('').map(num => DIGITS[num.toUpperCase()]);
  let value = 0;
  digitsArr.forEach(digit => {
    value = (16 * value) + digit;
  });
  console.log(value);
  return value;
}

console.log(hexadecimalToInteger('4D9f') === 19871);