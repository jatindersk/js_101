let dms = angle => {
  let angleStr = String(angle);
  let degree = angleStr.includes('.') ? angleStr.slice(0,  angleStr.indexOf('.')) : angleStr.slice(0);
  let fraction = angleStr.slice(angleStr.indexOf('.'));

  let dmsStr = `${degree}°`;
  let minSec = String(fraction * 60); //  '43.8'
  dmsStr += minSec.includes('.') ? minSec.slice(0, minSec.indexOf('.')) + `'` : minSec.slice(0) + `'`;


  dmsStr += minSec.includes('.') ? (minSec.slice(minSec.indexOf('.')) * 60) + `"` : '00' + `"`;
  console.log(dmsStr);
};

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"