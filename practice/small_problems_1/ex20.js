function fridayThe13ths(year) {
  const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  let counter = 0;
  MONTHS.forEach(month => {
    let date = new Date(`${month} 13, ${year} 22:10:00`);
    if (date.getDay() === 5) counter += 1;
  });
  return counter;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2