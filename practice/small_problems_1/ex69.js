//  divide by 100 to get the century
//  use to remainder of the above division to determine whether to round off
//    the century value
//  use a separate function to append the ending letters to century number

let century = year => {
  let century = Math.ceil(year / 100);
  return century + returnOrdinals(String(century));
};

function returnOrdinals(century) {
  let lastDigit = century % 10;

  if (century.length === 1) {
    return lastDigit === 3 ? 'rd' : 'st';
  }

  if (century.length === 2 && century[0] === '1') {
    return 'th';
  } else if (century.length === 2) {
    switch (lastDigit) {
      case 0:
      case 2:
        return 'th';
      case 3:
        return 'rd';
      default:
        return 'st';
    }
  }
  return lastDigit === 3 ? 'th' : 'nd';
}

console.log(century(2000));        // "20th"
console.log(century(1965));        // "20th"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

console.log(century(256));         // "3rd"

console.log(century(2001));        // "21st"
console.log(century(5));           // "1st"

console.log(century(10103));       // "102nd"