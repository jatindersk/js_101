let dms = angle => {
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_HOUR = 60;
  let result = '';
  let degrees = Math.floor(angle);
  let minutes = Math.floor((angle - degrees) * MINUTES_PER_DEGREE);
  let seconds = Math.floor((((angle - degrees) * MINUTES_PER_DEGREE) - minutes)
    * SECONDS_PER_HOUR);

  result += degrees + '˚' + prefixZeroes(minutes) + "'"
    + prefixZeroes(seconds) + '"';
  console.log(result);
};

function prefixZeroes(num) {
  const DIGITS = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  if (DIGITS.includes(num)) {
    return '0' + num;
  }
  return num;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"