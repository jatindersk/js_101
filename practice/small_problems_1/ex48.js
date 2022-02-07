// let stringToInteger = str => {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     A: 10,
//     B: 11,
//     C: 12,
//     D: 13,
//     E: 14,
//     F: 15
//   };
//   let result = 0;
//   for (let value of str) {
//     result = (result * 10) + DIGITS[value];
//   }
//   return result;

let hexadecimalToInteger = str => {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };
  let result = 0;
  for (let value of str) {
    result = (result * 16) + DIGITS[value.toUpperCase()];
  }
  return result;
}

console.log(hexadecimalToInteger('4D9f') === 19871);

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true