//  input: string
//  output: number
//  algorithm:
//  - iterate through the string and extract each character
//  - multiply the extracted character with 10 and assign it to a variable

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
  9: 9
};

function stringToInteger(numStr) {
  let digitsArr = numStr.split('').map(num => DIGITS[num]);
  let value = 0;
  digitsArr.forEach(digit => {
    value = (10 * value) + digit;
  });
  console.log(value);
  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true