//  k will the sum of successive powers of digits of number n / n
//  find the sum of successive powers of digits of number n

function digPow(n, p) {
  let sum = sumOfDigits(n, p);

  let k = sum / n;
  if (String(k).includes('.')) return -1;

  return k;
}

function sumOfDigits(num, pow) {
  num = String(num);
  return num.split('').reduce((acc, num) => {
    let power = Math.pow((+num), pow);
    pow += 1;
    return acc + power;
  }, 0);
}

console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51 (2360688)