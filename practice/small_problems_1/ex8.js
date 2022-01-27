// requirements:
//  - number is odd, number is divible by 7,
//  every digit within the number occue exactly once
// algorithm:
//  - use a while loop
//  - increment the input number by 1 before starting the loop
//  - check whether the number is odd
//  - check whether it's evenly divisible by 7
//  - check whether each digit in the number occurs only once

let featured = num => {
  num += 1;
  while (true) {
    if (num % 2 === 1 && num % 7 === 0) {
      if (hasUniqueDigits(String(num))) break;
    }
    num += 14;
    if (num === 9876543201) return 'There is no possible number that fulfills those requirements.';
  }
  return num;
};

function hasUniqueDigits(numStr) {
  let digits = {};
  for (let idx = 0; idx < numStr.length; idx += 1) {
    if (digits[numStr[idx]]) return false;
    else digits[numStr[idx]] = true;
  }
  return true;
}

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."