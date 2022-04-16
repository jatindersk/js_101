function fibonacci(num) {
  if (num <= 2) return 1;

  let first = 1;
  let second = 1;
  let fibNum = 3;

  while (fibNum <= num) {
    [first, second] = [second, (first + second)];
    fibNum += 1;
  }
  return second;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050