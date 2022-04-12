//  input: numbers, output: number
//  algo:
//  - we need to find the Math.pow of each digit of the input
//    number to the successive powers of second argument (a number)
//  - then calculate the sum of all above Math.pow values
//  - divide the sum by the input number to find the value of k

//  Note:
//  - the value of k should not be a float i.e no decimal numbers
//  - if it's a decimal number then return -1
//  - else return value of k
//  Above points Not clear in the question

function digPow(n, p) {
  let sum = 0;
  let currentDigit;
  let numStr = String(n);
  let k;

  for (let idx = 0; idx < numStr.length; idx += 1) {
    currentDigit = (+numStr[idx]);
    sum += Math.pow(currentDigit, p + idx);
  }
  k = sum / n;

  if (String(k).includes('.')) return -1;
  else return (sum / n);
}

console.log(digPow(46288, 5)); // -1
console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51