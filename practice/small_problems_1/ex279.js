//  stars are increasing and then decreasing in odd numbers
//    after reaching n (1, 3, 1)
//  left space is n - star count / 2

// function diamond(num) {
//   numberSequence(num).forEach(number => {
//     console.log(`${" ".repeat((num - number) / 2)}${"*".repeat(number)}`);
//   });
// }

// function numberSequence(num) {
//   let result = [];
//   let counter = 1;
//   let clause = 2;

//   while (counter > 0) {
//     result.push(counter);

//     if (counter === num) {
//       clause = -2;
//     }
//     counter += clause;
//   }

//   return result;
// }

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
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

diamond(3);
// logs
//  *
// ***
//  *

diamond(1);
// logs
// *

// let diamond = num => {

//   for (let idx = 1; idx < num; idx += 2) {
//     let starCount = idx;
//     console.log(`${' '.repeat((num - starCount) / 2)}${'*'.repeat(starCount)}`);
//   }

//   for (let idx = num; idx >= 1; idx -= 2) {
//     let starCount = idx;
//     console.log(`${' '.repeat((num - starCount) / 2)}${'*'.repeat(starCount)}`);
//   }
// };