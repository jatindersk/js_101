function fridayThe13ths(year) {
  let counter = 0;
  let monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  monthsArr.forEach(month => {
    if (new Date(`${month} 13, ${year}`).getDay() === 5) counter += 1;
  });
  return counter;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2