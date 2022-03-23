function power(base, exponent) {
  let result = 1;

  while (exponent >= 1) {
    result *= base;
    exponent -= 1;
  }

  return result;
}

console.log(power(10, 0)); // 1
console.log(power(2, 3)); // 8
console.log(power(-5, 3)); // -125
console.log(power(-4, 2)); // 16