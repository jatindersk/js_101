//  if previous f(n) is 1 or 2 then result is 1
//  if previous f(n) is not 1 or 2 then result to be stored in a data structure
//  choose object as the data structure for above

function fibonacci(nth) {
  let obj = { };
  if (nth <= 2) {
    return 1;
  }
  if (obj[nth]) return obj[nth];
  else obj[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);

  return obj[nth];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765