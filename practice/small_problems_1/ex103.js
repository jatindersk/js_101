let rotateArray = arr => {
  if (!Array.isArray(arr)) return undefined;
  else if (arr.length === 0) return [];
  return arr.slice(1).concat(arr[0]);
};

let rotateRightmostDigits = (number, count) => {
  let digits = String(number).slice(String(number).length - count);
  return String(number).slice(0, String(number).length - count) +
    rotateArray(digits.split('')).join('');
};

let maxRotation = number => {
  number = String(number);
  for (let idx = 0; idx < number.length - 1; idx += 1) {
    // console.log(`sliced:: ${number.slice(idx)}...count:: ${number.length - idx}`);
    number = number.slice(0, idx) +
      rotateRightmostDigits(number.slice(idx), number.length - idx);

    // console.log(`number:: ${number}`);
  }
  return Number(number);
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845