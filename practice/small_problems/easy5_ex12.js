let afterMidnight = time => {
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_HOUR = 60;
  const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
  let timeArr = time.split(':');
  let hrToMin = timeArr[0] * 60;
  let totalMin = hrToMin + parseInt(timeArr[1], 10);
  totalMin %= MINUTES_PER_DAY;
  if (totalMin === MINUTES_PER_DAY) totalMin = 0;
  return totalMin;
};

let beforeMidnight = time => {
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_HOUR = 60;
  const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

  let totalMin = MINUTES_PER_DAY - afterMidnight(time);
  if (totalMin === MINUTES_PER_DAY) totalMin = 0;
  console.log(totalMin);
  return totalMin;
};

console.log(afterMidnight("24:10") === 10);
console.log(beforeMidnight("23:50") === 10);
console.log(beforeMidnight("24:00") === 0);
// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);