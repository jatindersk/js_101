function fibonacci(num) {
  let first = 1;
  let second = 1;
  let counter = 3;

  while (counter <= num) {
    let fibo = first + second;
    [first, second] = [second, fibo];

    counter += 1;
  }

  return second;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050