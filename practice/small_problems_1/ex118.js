let isBlockWord = str => {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU',
    'VI', 'LY', 'ZM'];
  let charArr = str.split('');

  for (let idx = 0; idx < charArr.length; idx += 1) {
    let char = charArr[idx].toUpperCase();
    if (checkUniqeness(blocks, char)) {
      let letterIdx = blocks.findIndex(block => block.includes(char));
      blocks.splice(letterIdx, 1);
    } else return false;
  }
  return true;
};

function checkUniqeness(blocks, char) {
  return blocks.some(block => block.includes(char));
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

// if (blocks.includes(char)) {
//   console.log(`includes ${blocks.includes(char)}:: index ${blocks.indexOf(char)}`);
//   let index = blocks.indexOf(char);
//   blocks.splice(index, 1);
//   return 1;
// }
// console.log(blocks);
// return -1;