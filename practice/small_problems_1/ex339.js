let findFibonacciIndexByLength = digits => {
  let fiboNum = 0;
  let first = 1n;
  let second = 1n;
  let index = 2n;

  while (!hasSameDigits(fiboNum, digits)) {
    fiboNum = first + second;
    [first, second] = [second, fiboNum];
    index += 1n;
  }
  console.log(index);
};

function hasSameDigits(num, digits) {
  return !(String(num).length < digits);
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.