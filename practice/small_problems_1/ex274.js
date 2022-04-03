let sumSquareDifference = num => {
  let result = [];

  while (num > 0) {
    result.unshift(num);
    num -= 1;
  }

  let squareSum = Math.pow(result.reduce((sum, num) => sum + num), 2);
  let sumSquare = result.reduce((sum, num) => sum + (num * num), 0);

  return squareSum - sumSquare;
};

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150