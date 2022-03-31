//  calculate the century
//  append the appropriate suffix to the century number

function century(year) {
  let century;

  if (year % 100 > 0) {
    century = Math.floor(year / 100) + 1;
  } else century = Math.floor(year / 100);

  console.log(addSuffix(century));
}

function addSuffix(century) {
  if (lastTwo(century)) {
    return century + 'th';
  }
  let lastDigit = century % 10;
  switch (lastDigit) {
    case 1: return century + 'st';
    case 2: return century + 'nd';
    case 3: return century + 'rd';
    default: return century + 'th';
  }
}

function lastTwo(century) {
  century %= 100;
  return century === 11 || century === 12 || century === 13;
}

//  st: 1, 21,
//  nd: 2
//  rd: 3
//  th: 4, 5, 6, 7, 8, 9, 10, 11


century(256);         // "3rd"
century(5);           // "1st"

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"