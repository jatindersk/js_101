let century = year => {
  let cent;

  if (year % 100 > 0) {
    cent = Math.floor(year / 100) + 1;
  } else cent = Math.floor(year / 100);

  console.log(addSuffix(cent));
};

function addSuffix(cent) {
  let lastTwoDigits = cent % 100;
  let lastDigit = cent % 10;

  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) return `${cent}th`;

  switch (lastDigit) {
    case 1: return `${cent}st`;
    case 2: return `${cent}nd`;
    case 3: return `${cent}rd`;
    default: return `${cent}th`;
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"