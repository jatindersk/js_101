function humanReadable (seconds) {
  const MINUTES_PER_HOUR = 60;
  const SECONDS__PER_MINUTE = 60;
  const SECONDS__PER_HOUR = MINUTES_PER_HOUR * SECONDS__PER_MINUTE; // 3600

  let hours;
  let minutes;
  let sec;

  let perHour = (seconds / 60);
  hours = Math.floor(Math.floor(perHour) / 60);
  minutes = Math.round(Math.floor(perHour) % 60);
  sec = seconds % 60;
  return `${appendZeros(hours)}:${appendZeros(minutes)}:${appendZeros(sec)}`;
}

function appendZeros(time) {
  if (String(time).length < 2) return '0' + time;
  return time;
}

console.log(humanReadable(0)); // '00:00:00'
console.log(humanReadable(59)); // '00:00:59'
console.log(humanReadable(60)); // '00:01:00'
console.log(humanReadable(90)); // '00:01:30'
console.log(humanReadable(3599)); // '00:59:59'
console.log(humanReadable(3600)); // '01:00:00'
console.log(humanReadable(45296)); // 12:34:56'