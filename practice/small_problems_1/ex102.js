let rotateArray = arr => {
  if (!Array.isArray(arr)) return undefined;
  else if (arr.length === 0)  return [];
  return arr.slice(1).concat(arr[0]);
};

let rotateRightmostDigits = (number, count) => {
  let digits = String(number).slice(String(number).length - count);
  return String(number).slice(0, String(number).length - count) +
    rotateArray(digits.split('')).join('');
};


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917