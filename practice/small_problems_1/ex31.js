//  input: number, output: string
//  algorithm:

let timeOfDay = min => {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

  min %= MINUTES_PER_DAY;
  if (min < 0) {
    min += MINUTES_PER_DAY;
  }
  let hours = parseInt(min / MINUTES_PER_HOUR, 10);
  let minutes = min % MINUTES_PER_HOUR;

  hours =  padZeros(hours);
  minutes = padZeros(minutes);
  return returnResult(hours, minutes);
};

function padZeros(time) {
  time = String(time);
  if (time.length !== 2) return '0' + time;
  return time;
}

function returnResult(hours, minutes) {
  return `${hours}:${minutes}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");