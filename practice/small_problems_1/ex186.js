//  - find the sum of all numbers in the array
//  - find the next prime number that follows the sum
//  - find the difference between the sum and next prime number
//    and return it

function minimumNumber(numbers) {
  let sum = numbers.reduce((sum, num) => sum + num);
  if (sum === 2 || sum === 3) return 0;
  if (sum % 2 !== 0 && sum % 3 !== 0) return 0;

  let nextPrime = sum + 1;

  while (true) {
    if (isPrime(nextPrime)) {
      break;
    }
    nextPrime += 1;
  }
  return nextPrime - sum;
}

function isPrime(nextPrime) {
  if (nextPrime < 10) {
    const numbers = [2, 3];
    return !numbers.some(el => nextPrime % el === 0);
  } else {
    const numbers = [2, 3, 5, 7];
    return !numbers.some(el => nextPrime % el === 0);
  }
}

console.log(minimumNumber([2, 12, 8, 4, 6])); // 5
console.log(minimumNumber([1,1,1])); // 0
console.log(minimumNumber([5, 2])); // 0
console.log(minimumNumber([50,39,49,6,17,28])); // 2
console.log(minimumNumber([3,1,2])); // 1