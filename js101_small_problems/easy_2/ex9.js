// Approach 1: Incorrect
// let stringToInteger = str => {
//   return +str;
// };

// LS Approach:
let stringToInteger = string => {
  const DIGIT = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let numArr = string.split('').map(val => DIGIT[val]);
  let value = 0;
  numArr.forEach(num => {
    value = (value * 10) + num;
  });
  return value;
};

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true