function fibonacci(nth) {
  let num = 3;
  let first = 1;
  let second = 1;
  while (num <= nth) {
    [first, second] = [second, first + second];
    num += 1;
  }
  return second;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050