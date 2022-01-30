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

//  input: number, output: number
//  algorithm:
//  - convert the input number to a string
//  - call the rotateRightmostDigits function inside a loop
//  - supply the count digits value as the length of number str
//  - save the rotated number returned from rotateRightmostDigits
//  - use the returned value to call the function again with new count
//  - loop until value of count is greater than 1

function maxRotation(num) {
  let rotatedNum = num;

  for (let count = String(num).length; count > 1; count -= 1) {
    rotatedNum = rotateRightmostDigits(rotatedNum, count);
  }
  return rotatedNum;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845