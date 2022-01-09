let fibonacci = int => {
  let previousTwo = [1, 1];
  let idx = 3;
  while (idx <= int) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
    idx += 1;
  }
  return previousTwo[1];
};

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050