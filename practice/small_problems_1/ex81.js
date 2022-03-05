let timeOfDay = min => {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
  let hours;
  let minutes;

  if (min < 0) {
    min = MINUTES_PER_DAY - (Math.abs(min) % MINUTES_PER_DAY);
    hours = Math.floor(min / MINUTES_PER_HOUR);
    minutes = ((min / MINUTES_PER_HOUR) - hours) * MINUTES_PER_HOUR;
    minutes = Math.round(minutes);
  } else {
    hours = Math.floor((min % MINUTES_PER_DAY) / MINUTES_PER_HOUR);
    minutes = (min % MINUTES_PER_DAY) % MINUTES_PER_HOUR;
  }

  //  console.log(`${padZeros(hours)}:${padZeros(minutes)}`);
  return `${padZeros(hours)}:${padZeros(minutes)}`;
};

function padZeros(number) {
  number = String(number);
  return (number.length < 2) ? '0' + number : number;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");

console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(-4231) === "01:29");