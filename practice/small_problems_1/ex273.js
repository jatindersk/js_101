//  it should be odd
//  it should be a multiple of 7
//  digits should not repeat

let featured = num => {
  num += 1;
  while (true) {
    if (num % 2 === 1 && num % 7 === 0) {
      if (hasUniqueDigits(num)) break;
      else if (num > 9876543201) {
        return "There is no possible number that fulfills those requirements.";
      }
    }
    num += 1;
  }
  return num;
};

function hasUniqueDigits(num) {
  let numStr = String(num);
  let result = [];
  let numArr = numStr.split('');

  for (let idx = 0; idx < numArr.length; idx += 1) {
    if (result.includes(numArr[idx])) return false;
    result.push(numArr[idx]);
  }
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."