// // input: string
// // output: boolean
// // rules:
// //  Explicit:
// //  -total of 13 blocks of 2 letters each
// //  -only one letter from each block can be used at a time
// //  -a block can be used only once
// //  -case sensitivity does not matter when comparing the letters
// //  Implicit:
// //  -

// let isBlockWord = str => {
//   let blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T']
//     , ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
//   let obj = {};
//   let result = true;
//   str.split('').forEach(letter => {
//     blocks.forEach((block, idx) => {
//       if (block.includes(letter.toUpperCase())) {
//         let blockIndex = idx;
//         if (obj[blockIndex]) {
//           result = false;
//         }
//         obj[blockIndex] = true;
//       }
//     });
//   });
//   return result;
// };

function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  let letters = word.split("");

  for (let index = 0; index < letters.length; index += 1) {
    let matchingBlock = blocks.filter(block => {
      return block.indexOf(letters[index].toUpperCase()) > -1;
    })[0];
    console.log(matchingBlock);
    if (matchingBlock === undefined) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1);
    }
  }

  return true;
}

// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('BUTCH'));      // false

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false