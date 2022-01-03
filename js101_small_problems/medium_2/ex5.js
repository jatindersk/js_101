let featured = int => {
  const MAX_FEATURED = 9876543201;

  for (let num = int + 1; num <= MAX_FEATURED; num += 1) {
    if (num % 2 === 1 && num % 7 === 0 && uniqueDigits(num)) {
      return num;
    }
  }
  return "There is no possible number that fulfills those requirements.";
};

function uniqueDigits(num) {
  let numStr = String(num);

  for (let idx = 1; idx < numStr.length; idx += 1) {
    if (numStr.slice(idx).includes(numStr[idx - 1])) {
      return false;
    }
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