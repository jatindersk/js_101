let afterMidnight = time => {
  let hours = time.split(':')[0];
  let minutes = time.split(':')[1];

  if (hours === '24' || Number(hours + minutes) === 0) return 0;

  let totalMinutes = (hours * 60) + parseInt(minutes, 10);

  return totalMinutes;
};

let beforeMidnight = time => {
  let hours = time.split(':')[0];
  let minutes = time.split(':')[1];

  if (hours === '24' || Number(hours + minutes) === 0) return 0;

  let totalMinutes = 1440 - ((hours * 60) + Number(minutes));
  return totalMinutes;
};

console.log(afterMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(beforeMidnight("12:34") === 686);
console.log(beforeMidnight("24:00") === 0);