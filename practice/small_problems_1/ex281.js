//  left padding sequence [0, 1, 2, 0, 1, 2]
//  padding between the stars sequence [2, 1, 0, 0, 1, 2]
//  padding between the stars: n - 3 / 2
//  left padding: n - (3 +(padding between the stars * 2))

let star = num => {
  let paddingBetween = (num - 3) / 2;
  let leftpadding = num - (3 + (paddingBetween * 2));

  for (let idx = 0; idx < Math.floor(num / 2); idx += 1) {
    console.log(`${' '.repeat(leftpadding + idx)}*${' '.repeat(paddingBetween - idx)}*${' '.repeat(paddingBetween - idx)}*`);
  }
  console.log('*'.repeat(num));

  for (let idx = Math.floor(num / 2) - 1; idx >= 0; idx -= 1) {
    console.log(`${' '.repeat(leftpadding + idx)}*${' '.repeat(paddingBetween - idx)}*${' '.repeat(paddingBetween - idx)}*`);
  }
};

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

console.log('\n');

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *