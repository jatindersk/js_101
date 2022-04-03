let rotateArray = arr => {
  if (Array.isArray(arr) === false) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
};

let rotateRightmostDigits = (num, digits) => {
  num = String(num);
  let sliced = num.slice(num.length - digits);

  return Number(num.slice(0, num.length - digits) + rotateArray(sliced.split('')).join(''));
};

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917