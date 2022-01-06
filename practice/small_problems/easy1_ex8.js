// let isLeapYear = year => {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Alternate:
let isLeapYear = year => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

function result(boolean) {
  console.log(boolean);
}

result(isLeapYear(2016));      // true
result(isLeapYear(2015));      // false
result(isLeapYear(2100));      // false
result(isLeapYear(2400));      // true
result(isLeapYear(240000));    // true
result(isLeapYear(240001));    // false
result(isLeapYear(2000));      // true
result(isLeapYear(1900));      // false
result(isLeapYear(1752));      // true
result(isLeapYear(1700));      // false
result(isLeapYear(1));         // false
result(isLeapYear(100));       // false
result(isLeapYear(400));       // true