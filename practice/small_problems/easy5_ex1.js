// algorithm:
//  - coerce the input number to a string
//  - extract the integer out of the input floating number for the angle value
//  - extract the floating point portion and multiply it by 60 to get minutes
//  - extract floating portion from minutes and multiply it by 60 for seconds
//  - if the input angle isn't a floating point number, then set minutes and
//  seconds to 00

let dms = angle => {
  let strAngle = String(angle);
  let minutes = '';
  let seconds = '';
  let result = '';
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_HOUR = 60;
  let degree = Math.floor(angle);
  let decimalIdx = strAngle.indexOf('.');
  //degree = strAngle.slice(0, decimalIdx);
  if (!strAngle.includes('.')) {
    minutes += '00';
    seconds += '00';
  } else {
    let totalMin = String(strAngle.slice(decimalIdx) * MINUTES_PER_DEGREE);
    minutes += Math.floor(totalMin);
    let minIdx = totalMin.indexOf('.');
    seconds += totalMin.slice(minIdx) * SECONDS_PER_HOUR;
  }
  result += degree + '˚' + minutes + "'" + seconds + '"';
  console.log(result);
};

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"