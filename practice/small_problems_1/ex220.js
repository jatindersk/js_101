//  compute the fibonacci number
//  check the number of digits in the computed number to those required
//  if same then return the index of the current fibonacci number
//  if no then continue to compute further

// let findFibonacciIndexByLength = digits => {
//   let fiboNum;
//   let index = 2n;

//   while (BigInt(String(fiboNum).length) !== digits) {
//     index += 1n;
//     fiboNum = returnFibonacciNum(index);
//     // console.log(`index is ${index}`);
//   }

//   return index;
// };

// function returnFibonacciNum(index) {
//   if (index <= 2n) return 1n;

//   return returnFibonacciNum(index - 1n) + returnFibonacciNum(index - 2n);
// }

function findFibonacciIndexByLength(index) {
  let first = 1n;
  let second = 1n;
  let fibonacci;
  let idx = 2n;

  do {
    fibonacci = first + second;
    idx += 1n;
    [first, second] = [second, fibonacci];
  } while (String(fibonacci).length < index);

  return idx;
}

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.