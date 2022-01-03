let sumSquareDifference = count => {
  return squareSum(count) - sumSquare(count);
};

function sumSquare(count) {
  let square = 0;
  let sum = 0;
  while (count > 0) {
    square = count ** 2;
    sum += square;
    count -= 1;
  }
  return sum;
}

function squareSum(count) {
  let sum = 0;
  while (count > 0) {
    sum += count;
    count -= 1;
  }
  return (sum ** 2);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150