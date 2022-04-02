const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR; // 1440
let totalMin;

let afterMidnight = time => {
  time = time.split(':');
  totalMin = (time[0] * MINUTES_PER_HOUR) + Number(time[1]);

  return totalMin % MINUTES_PER_DAY;
};

function beforeMidnight(time) {
  time = time.split(':');
  totalMin = (time[0] * MINUTES_PER_HOUR) + Number(time[1]);

  if (totalMin === 0 || totalMin === MINUTES_PER_DAY) return 0;

  totalMin %= MINUTES_PER_DAY;
  return MINUTES_PER_DAY - totalMin;

}

console.log(afterMidnight("00:00") === 0);
console.log(afterMidnight("24:00") === 0);
console.log(afterMidnight("12:34") === 754);

console.log(beforeMidnight("12:34") === 686);
console.log(beforeMidnight("00:00") === 0);
console.log(beforeMidnight("24:00") === 0);