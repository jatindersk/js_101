let fibonacci = num => {
  let obj = {};

  if (num <= 2) return 1;
  if (obj[num]) return obj[num];

  obj[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return obj[num];
};

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765