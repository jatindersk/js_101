function featured(number) {
  do {
    number += 1;
    if (number > 9876543201) {
      return "There is no possible number that fulfills those requirements.";
    }
  } while (!isFeatured(number));

  return number;
}

function isFeatured(number) {
  return (number % 2 !== 0) && (number % 7 === 0) && uniqueDigits(number);
}

function uniqueDigits(number) {
  let numArr = String(number).split('');
  let resultArr = [];

  for (let idx = 0; idx < numArr.length; idx += 1) {
    if (resultArr.includes(numArr[idx])) return false;
    else resultArr.push(numArr[idx]);
  }

  return true;
}

// console.log(uniqueDigits(1001));

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