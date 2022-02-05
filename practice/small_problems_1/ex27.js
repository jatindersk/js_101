//  input: number (a floating point number), output: string
//  algorithm:
//  - extract the fractional part from input number
//  - convert the fractional part to minutes
//  - convert the minutes to minutes and seconds
//  - use a function to append the special charcaters for
//  degree, minutes and seconds to respective values

function appendZeros(num) {
  if (String(num).length !== 2) return '0' + num;
  else return String(num);
}

let dms = angle => {
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;
  // let numArr = String(angle).split('.');
  // if (numArr.length !== 2) return numArr[0];

  let degree = parseInt(angle, 10);
  let minutes = parseInt((angle - degree) * MINUTES_PER_DEGREE, 10);
  let seconds = (((angle - degree) * MINUTES_PER_DEGREE) - minutes)
                * SECONDS_PER_MINUTE;
  seconds = parseInt(seconds, 10);
  minutes = appendZeros(minutes);
  seconds = appendZeros(seconds);

  return degree + '°' + minutes + "'" + seconds + "''";
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"