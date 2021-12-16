let isOdd = num => {
  if (num < 0) {
    num *= -1;
  }

  if (num % 2 === 1) return 'true';
  return 'false';
};

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true