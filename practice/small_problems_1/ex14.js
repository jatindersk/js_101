//  input: number, output: number
//  algorithm:
//  - convert the number to a string
//  - slice the string
//  - the start index for the slice will be the second argument
//  - convert this sliced string to an array and pass it to the rotateArray func
//  - convert the value returned from rotateArray function to a string
//  - append the rotated string to the remaining portion of the original string
//  - convert the original string back to the number

let rotateArray = arr => {
  if (!Array.isArray(arr)) return undefined;

  if (arr.length) {
    let arrCopy = arr.slice(1);
    arrCopy.push(arr[0]);
    return arrCopy;
  }
  return [];
};

let rotateRightmostDigits = (num, count) => {
  let numStr = String(num);
  let startIdx = numStr.length - count;
  let slicedStr = numStr.slice(startIdx);
  let rotatedStr = rotateArray(slicedStr.split('')).join('');

  let result = numStr.slice(0, startIdx) + rotatedStr;
  return Number(result);
};

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917