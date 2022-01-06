// algorithm:
//  - calculate the fibonacci numbers until we get the first
//    number with the number of digits specified by the argument
//  - how to determine the point upto which the fibonacci numbers to
//    be calculated?

let findFibonacciIndexByLength = digits => {
  if (digits === 1n) {
    return 1n;
  }
  let index = 2n;
  let fibonacciNum;
  do {
    index += 1n;
    fibonacciNum = calculateFibonacci(index);
  } while (String(fibonacciNum).length < digits);
  return index;
};

function calculateFibonacci(index) {
  if (index === 1n || index === 2n) {
    return 1n;
  }
  return calculateFibonacci(index - 2n) + calculateFibonacci(index - 1n);
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n)) === 476n;
// console.log(findFibonacciIndexByLength(1000n)) === 4782n;
// console.log(findFibonacciIndexByLength(10000n)) === 47847n;

// The last example may take a minute or so to run.