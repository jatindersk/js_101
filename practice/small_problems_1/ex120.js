function diamond(num) {
  console.log(`${' '.repeat(Math.floor(num / 2))}*`);

  innerSpaceSequence(num).forEach(space => {
    let padding = ((num - space) / 2) - 1;
    console.log(`${' '.repeat(padding)}*${' '.repeat(space)}*`);
  });

  console.log(`${' '.repeat(Math.floor(num / 2))}*`);
}

function innerSpaceSequence(num) {
  let counter = 1;
  let increment = 2;
  let sequence = [];

  while (counter > 0) {
    sequence.push(counter);
    if (counter === num - 2) {
      increment = -2;
    }
    counter += increment;
  }
  return sequence;
}

//  for diamond(9);
//  inner space sequence [ 1, 3, 5, 7, 5, 3, 1 ]
//  padding left sequence [ 3, 2, 1, 0, 1, 2, 3 ]

diamond(9);
// logs
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

diamond(3);
// logs
//  *
// * *
//  *

diamond(11);