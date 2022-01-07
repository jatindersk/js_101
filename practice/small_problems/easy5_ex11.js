// algorithm:
//  - calculate the 'remainder' of dividing input by
//  total number of minutes in a day (24 hours)
//  ** This remainder is what left in excess or lack to a full day (24 hours)
//  - divide this remainder with minutes per hour to get the hours past or pre
//  midnight
//  - now multiply the floating / fractional part of the division quotient with
//  minutes per hour to get the minutes pre / past midnight
//  If the input is negative, then offset it by adding +24 to calulated hours
//  and 1440 (min per day) to the calculated minutes

let timeOfDay = min => {
  const MINUTES_PER_HOUR = 60;
  const MINUTES_PER_DAY = 60 * 24;
  let hours;
  let minutes;
  let excessMin = min % MINUTES_PER_DAY;

  if (Math.sign(excessMin) === (-1)) {
    let offsetMin = 1440 + excessMin;
    hours = Math.floor(offsetMin / MINUTES_PER_HOUR);
    minutes = Math.floor(offsetMin % MINUTES_PER_HOUR);
    // hours = Math.floor(excessMin / MINUTES_PER_HOUR) + 24;
    // minutes = Math.floor(MINUTES_PER_DAY +
    //   (((excessMin / MINUTES_PER_HOUR) - hours) * MINUTES_PER_HOUR));
    console.log(`${padZeros(hours)}:${padZeros(minutes)}`);
    return `${padZeros(hours)}:${padZeros(minutes)}`;
  }

  hours = Math.floor(excessMin / MINUTES_PER_HOUR);
  minutes = Math.floor(((excessMin / MINUTES_PER_HOUR) - hours)
    * MINUTES_PER_HOUR);

  console.log(`${padZeros(hours)}:${padZeros(minutes)}`);
  return `${padZeros(hours)}:${padZeros(minutes)}`;
};

function padZeros(num) {
  const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (DIGITS.includes(num)) {
    return '0' + num;
  }
  return num;
}

console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(-4231) === "01:29");
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");