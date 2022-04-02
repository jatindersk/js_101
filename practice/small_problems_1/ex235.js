let timeOfDay = min => {
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_HOUR = 60;
  const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR; // 1440

  min %= MINUTES_PER_DAY;
  let hours = Math.floor(min / MINUTES_PER_HOUR);
  let minutes = min - (hours * MINUTES_PER_HOUR);

  if (min < 0) hours = HOURS_PER_DAY + hours;
  return `${appendZeros(hours)}:${appendZeros(minutes)}`;
};

function appendZeros(time) {
  time = String(time);
  return time.length < 2 ? '0' + time : time;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");