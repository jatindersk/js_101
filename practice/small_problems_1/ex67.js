let findFibonacciIndexByLength = digits => {
  let fiboIndex = 1n;
  let length;
  do {
    fiboIndex += 1n;
    let fiboNum = calculateFibonacciNumber(fiboIndex);
    console.log(`number: ${fiboNum}`);
    length = String(fiboNum).length;
    console.log(`length ${length}`);
  } while (length < digits);
  console.log(`index ${fiboIndex}`);
  return fiboIndex;
};

function calculateFibonacciNumber(fiboIndex) {
  if (fiboIndex <= 2n) return 1;

  return calculateFibonacciNumber(fiboIndex - 1n) +
    calculateFibonacciNumber(fiboIndex - 2n);
}

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.