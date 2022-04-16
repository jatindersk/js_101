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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917