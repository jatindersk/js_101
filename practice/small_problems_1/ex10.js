// algorithm:
//  - we have rows and columns of size 'n'
//  - the stars in the pattern start from 1 and increment
//  by 2 in each subsequent rows until the row number is = n
//  - the space to the left hand side of star is Math.floor(n / 2)
//  - the space then decreases by 1 until we reach the middle

let diamond = num => {
  let midPoint = Math.floor(num / 2);

  for (let idx = 0; idx < midPoint; idx += 1) {
    console.log(`${' '.repeat(midPoint - idx)}${'*'.repeat((idx * 2) + 1)}`);
  }

  console.log(`${'*'.repeat(num)}`);

  for (let idx = 0; idx < midPoint; idx += 1) {
    console.log(`${' '.repeat(idx + 1)}${'*'.repeat(num - ((idx + 1) * 2))}`);
  }
};

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