let diamond = count => {

  for (let idx = 1; idx < count; idx += 2) {
    console.log(`${' '.repeat((count - idx) / 2)}${'*'.repeat(idx)}`);
  }

  for (let idx = count; idx > 0; idx -= 2) {
    console.log(`${' '.repeat((count - idx) / 2)}${'*'.repeat(idx)}`);
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