let triangle = stars => {
  let idx = 1;

  while (idx <= stars) {
    console.log(`${' '.repeat(stars - idx)}${'*'.repeat(idx)}`);
    idx += 1;
  }
};

triangle(5);

// *
// **
// ***
// ****
// *****

triangle(9);

//     *
//    **
//   ***
//  ****
// *****
// ******
// *******
// ********
// *********