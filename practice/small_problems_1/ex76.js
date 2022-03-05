function dms(angle) {
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;
  let degree = Math.floor(angle);
  let minutes = Math.floor((angle - degree) * MINUTES_PER_DEGREE);
  let seconds = (((angle - degree) * MINUTES_PER_DEGREE) - minutes) *
    SECONDS_PER_MINUTE;
  seconds = Math.floor(seconds);

  return degree + `°` + appendZeros(minutes) + `'` + appendZeros(seconds) + `''`;
}

function appendZeros(number) {
  number = String(number);
  if (number.length < 2) return `0` + number;
  return number;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"