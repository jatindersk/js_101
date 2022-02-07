//  input: number, output: string
//  algorithm:
//  - calculate century number
//  - append 'st', 'nd', 'rd', or 'th' to the century number

let century = num => {
  let century = Math.floor(num / 100) + 1;
  if (num % 100 === 0) {
    century -= 1;
  }
  return String(century) + appendSuffix(century);
};

function appendSuffix(century) {
  let lastTwoDigits = century % 100;
  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return 'th';
  }

  let lastDigit = century % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"