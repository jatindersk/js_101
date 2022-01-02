// input: two numbers (original number, the last count digits to rotate)
// output: the rotated number
// rules: convert the input number to a string
// then convert the string to an array of characters
// use the second argument to extract the digit using splice method
// then push the extracted digit to end of the array
// use join to covert it back to string and then use Number and return

let rotateRightmostDigits = (number, index) => {
  let numStr = String(number);
  let numStrArr = numStr.split('');

  let digit = numStrArr.splice(numStrArr.length - index, 1);
  numStrArr.push(digit[0]);
  return Number(numStrArr.join(''));
};

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917