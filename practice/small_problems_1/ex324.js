let sumSquareDifference = limit => {
  let numbers = getNumbers(limit);
  let sum = numbers.reduce((sum, num) => sum + num);
  let squareSum = numbers.reduce((sum, num) => sum + (num * num), 0);

  return Math.pow(sum, 2) - squareSum;
};

function getNumbers(limit) {
  let result = [];

  while (limit > 0) {
    result.unshift(limit);
    limit -= 1;
  }
  return result;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150