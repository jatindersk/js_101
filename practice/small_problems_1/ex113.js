let sumSquareDifference = count => {
  let numArr = [];

  do {
    numArr.unshift(count);
    count -= 1;
  } while (count > 0);

  return squareSum(numArr) - sumSquare(numArr);
};

function squareSum(numArr) {
  return Math.pow(numArr.reduce((sum, num) => sum + num), 2);
}

function sumSquare(numArr) {
  return numArr.map(num => num * num).reduce((sum, num) => sum + num);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150