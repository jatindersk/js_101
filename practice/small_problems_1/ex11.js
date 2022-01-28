// algorithm:
//  - every number is the sum of previous two numbers
//  - f(1) and f(2) is fixed i.e 1
//  - [1, 1] = [arr[0], arr[0] + arr[1]]
//  - if n is less than 2 then it should return 1
//  - else set a counter and a loop
//  - keep iteratimg the loop until the counter is > n

let fibonacci = num => {
  if (num === 1 || num === 2) return 1;

  let fibonacciArr = [1, 1];
  let counter = 3;
  while (counter <= num) {
    fibonacciArr = [fibonacciArr[1], fibonacciArr[0] + fibonacciArr[1]];
    counter += 1;
  }
  return fibonacciArr[1];
};

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050