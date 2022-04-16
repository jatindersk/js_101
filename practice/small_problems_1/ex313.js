let rotateArray = arr => {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
};

let rotateRightmostDigits = (num, digits) => {
  let numStr = String(num);
  let start = numStr.length - digits;

  let rotatedPart = rotateArray(numStr.slice(start).split(''));
  return numStr.slice(0, start) + rotatedPart.join('');
};

let maxRotation = num => {
  let digits = String(num).length;

  while (digits > 0) {
    num = rotateRightmostDigits(num, digits);
    digits -= 1;
  }

  return Number(num);
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845