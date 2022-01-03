let fridayThe13ths = year => {
  let months = {
    1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
    7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'
  };

  let weekDay;
  let count = 0;
  for (let month = 1; month <= 12; month += 1) {
    let date = new Date(`${months[month]} 13, ${year} 23:15:30`);
    weekDay = date.getDay();

    if (weekDay === 5) {
      count += 1;
    }
  }
  return count;
};

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2