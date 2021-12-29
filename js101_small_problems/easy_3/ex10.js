let endWith = yr => {

  switch (yr[yr.length - 1]) {
    case '0':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      return `${yr}th`;
    case '1':
      return `${yr}st`;
    case '2':
      return `${yr}nd`;
    case '3':
      return `${yr}rd`;
  }
};

let century = year => {
  let yr = Math.floor(year / 100);
  let cen = year % 100;

  if (cen !== 0) {
    yr += 1;
    return endWith(String(yr));
  } else {
    return endWith(String(yr));
  }
};


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"