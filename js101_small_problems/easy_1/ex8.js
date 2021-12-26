// input: number
// output: boolean
// rules:
//      Explicit requirements:
//        - year evenly divisible by 4 is a leap year but not divisible by 100
//        - year evenly divisible by both 100 and 400 is a leap year
//        - above rules are applied for year greater than zero

//      Implicit requirements:
//        - input greater than 0

// Algorithm:
//  isLeapYear function
//  ==================
//    - write an if/elseif statement
//    - if branch
//      - conditional: year is evenly divisble by 4 by NOT by 100, return true
//    - else if branch
//      - conditional: year is evenly divisible by both 100 and 400, return true

let isLeapYear = year => {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
};

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true