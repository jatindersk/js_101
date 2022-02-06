//  input: number, ouput: number
//  algorithm:
//  - keep calculating the fibonacci number until the value calculated has
//  the number of digits specified in argument

let findFibonacciIndexByLength = numDigits => {
  let index = 7n;
  while (true) {
    let numOfDigits = String(calculateFibonacciValue(index)).length;
//    console.log(`value:: ${value}..length:: ${typeof String(value).length}`);
    if (String(numOfDigits) === String(numDigits)) break;
    index += 1n;
  }
  return index;
};

function calculateFibonacciValue(index) {
  if (index <= 2n) return 1n;

  return calculateFibonacciValue(index - 1n)
    + calculateFibonacciValue(index - 2n);
}

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)) === 45n;
// console.log(findFibonacciIndexByLength(16n)) === 74n;
// console.log(findFibonacciIndexByLength(100n)) === 476n;
// console.log(findFibonacciIndexByLength(1000n)) === 4782n;
// console.log(findFibonacciIndexByLength(10000n)) === 47847n;

// The last example may take a minute or so to run.