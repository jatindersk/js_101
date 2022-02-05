//  input: string, output: minutes
//  algorithm:

// Without calling afterMidnight in beforeMidnight function:

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function extractHrsMin(str) {
  return str.split(':').map(el => parseInt(el, 10));
}

let afterMidnight = str => {
  let [hours, minutes] = extractHrsMin(str);
  let totalMinutes = (hours * MINUTES_PER_HOUR) + minutes;
  return (totalMinutes % MINUTES_PER_DAY);
};

let beforeMidnight = str => {
  let [hours, minutes] = extractHrsMin(str);
  let totalMinutes = (hours * MINUTES_PER_HOUR) + minutes;

  if (!totalMinutes) return 0;
  return (MINUTES_PER_DAY - totalMinutes);
};


console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(beforeMidnight("24:00") === 0);

// let timeArr = str.split(':');
// let hours = parseInt(timeArr[0], 10);
// let minutes = parseInt(timeArr[1], 10);

// let timeArr = str.split(':');
// let hours = parseInt(timeArr[0], 10);
// let minutes = parseInt(timeArr[1], 10);