function factors(number) {
  let divisor = number;
  let factors = [];

  if (number <= 0) {
    return 'invalid number';
  }

  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

console.log(factors(0));
console.log(factors(6));
console.log(factors(-1));