let fridayThe13ths = year => {
  const MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let counter = 0;

  for (let month of MONTHS) {
    let date = new Date(`${month} ${13}, ${year}`);
    if (date.getDay() === 5) counter += 1;
  }
  return counter;
};

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2