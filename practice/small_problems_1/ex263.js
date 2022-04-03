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

let maxRotation = num => {
  let counter = String(num).length;

  while (counter > 1) {
    num = rotateRightmostDigits(num, counter);
    counter -= 1;
  }

  return num;
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845