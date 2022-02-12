//  input: odd number, output: pattern of * (a string)
//  rules:
//  - the pattern starts by displaying one star
//  - it then increments by 2 {1, 3, ... upto n (input number)}
//  - the number of space characters prepending the star is
//  initially equal to the (input number) / 2
//  - the space then decreases by a count of 1
//  algorithm:
//  - define a loop that will iterate from 0 to the input number / 2 - 1
//  - on each iteration it will output the star and prepend space to them

let diamond = num => {
  let midPoint = Math.floor(num / 2);

  for (let idx = 0; idx < midPoint; idx += 1) {
    console.log(`${' '.repeat(midPoint - idx)}${'*'.repeat((idx * 2) + 1)}`);
  }

  console.log('*'.repeat(num));

  for (let idx = midPoint - 1; idx >= 0; idx -= 1) {
    console.log(`${' '.repeat(midPoint - idx)}${'*'.repeat((idx * 2) + 1)}`);
  }
};

diamond(3);
// logs
//  *
// ***
//  *

diamond(1);
// logs
// *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *