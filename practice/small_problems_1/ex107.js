function fibonacci(nth) {
  let obj = {};
  if (nth <= 2) {
    return 1;
  } else if (obj[nth]) {
    return obj[nth];
  } else {
    obj[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return obj[nth];
  }
}

// console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050