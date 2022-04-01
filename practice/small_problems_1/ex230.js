//  convert the angle to degree by calculating the remainder of dividing the
//    input degree by 360
//  then convert the decimal portion of the degrees obtained to minutes
//  then convert the decimal portion of the minutes obtained to seconds

let dms = angle => {
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_DEGREE = 60;

  let degree = Math.floor(angle % 360);
  let minutes = Math.floor(((angle % 360) - degree) * MINUTES_PER_DEGREE);
  // console.log(((angle % 360) - degree) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(((((angle % 360) - degree) * MINUTES_PER_DEGREE)
    - minutes ) * SECONDS_PER_DEGREE);

  // console.log(`degree ${degree} minutes ${minutes} seconds ${seconds}`);

  console.log(`${appendZeros(degree)}°${appendZeros(minutes)}'${appendZeros(seconds)}''`);
};

function appendZeros(val) {
  val = String(val);
  return val.length < 2 ? '0' + val : val;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"