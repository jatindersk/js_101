function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

// input: a number (integer)
// output: a number (maximun rotation of the input integer)
// rules:
//  - call the rotateRightmostDigits function with input integer
//    and the length of stringed version of input integer as arguments
//  - save the first rotated integer to maxRot

let maxRotation = int => {
  let length = String(int).length;
  for (let count = length; count >= 2; count -= 1) {
    int = rotateRightmostDigits(int, count);
    console.log(int);
  }
  return int;
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845