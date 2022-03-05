let afterMidnight = time => {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
  let [hours, minutes] = time.split(':');

  minutes = (hours * MINUTES_PER_HOUR) + Number(minutes);
  minutes %= MINUTES_PER_DAY;

  return minutes;
};

let beforeMidnight = time => {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

  if (afterMidnight(time)) {
    return MINUTES_PER_DAY - afterMidnight(time);
  } else return afterMidnight(time);
};


console.log(afterMidnight("00:00") === 0);
console.log(afterMidnight("24:00") === 0);
console.log(afterMidnight("12:34") === 754);

console.log(beforeMidnight("00:00") === 0);
console.log(beforeMidnight("12:34") === 686);
console.log(beforeMidnight("24:00") === 0);