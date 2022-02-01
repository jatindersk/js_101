//  algorithm:
//  - use a loop starting from 1 upto count
//  - use an empty array to get the numbers

function sumSquareDifference(count) {
  let numbers = [];
  for (let num = 1; num <= count; num += 1) {
    numbers.push(num);
  }
  let squareSum = Math.pow(numbers.reduce((sum, num) => sum + num), 2);
  let sumSquare = numbers.reduce((sum, num) => {
    sum += num * num;
    return sum;
  }, 0);

  return squareSum - sumSquare;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150