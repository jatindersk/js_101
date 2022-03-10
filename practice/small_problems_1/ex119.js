//  right space = 7 - 3 / 2 - idx
//  left space = 7 - 3 / 2 * idx

let star = num => {
  let leftSpace;
  let rightSpace;

  for (let idx = 0; idx < Math.floor(num / 2); idx += 1) {
    rightSpace = ((num - 3) / 2) - idx;
    leftSpace = idx;
    console.log(`${' '.repeat(leftSpace)}*${' '.repeat(rightSpace)}*${' '.repeat(rightSpace)}*`);
  }

  console.log(`${'*'.repeat(num)}`);

  for (let idx = 0; idx < Math.floor(num / 2); idx += 1) {
    rightSpace = idx;
    leftSpace = ((num - 3) / 2) - idx;
    console.log(`${' '.repeat(leftSpace)}*${' '.repeat(rightSpace)}*${' '.repeat(rightSpace)}*`);
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

// star(9);
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