function nextBigger(num) {
  let numStr = String(num);
  let lengthLimit = numStr.length;

  while (true) {
    num += 1;
    if ((String(num).length > lengthLimit)) {
      num = -1;
      break;
    } else if (hasSameDigits(num, numStr)) break;
  }
  return num;
}

function hasSameDigits(num, numStr) {
  num = String(num).split('');
  numStr = numStr.split('');
  for (let idx = 0; idx < num.length; idx += 1) {
    if (numStr.includes(num[idx])) {
      numStr.splice(numStr.indexOf(num[idx]), 1);
    }
  }
  return numStr.length === 0;
}

// function hasSameDigits(num, numStr) {
//   num = String(num);
//   return numStr.split('').every(ele => num.includes(ele));
// }

console.log(nextBigger(12)); // 21
console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(414)); // 441
console.log(nextBigger(144)); // 414