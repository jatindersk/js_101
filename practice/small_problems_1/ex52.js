//  input: string, output: boolean
//  rules:
//  - the word can use each block only once
//  - the word can use only one of the letters from every block
//  - the letters are not case sensitive
//  algorithm:
//  - save the blocks of letters as object properties and set their
//  initial value as boolean false
//  - access each letter of the input word and compare them to the
//  every block

let isBlockWord = word => {
  let blocks = {
    BO: 0,
    XK: 0,
    DQ: 0,
    CP: 0,
    NA: 0,
    GT: 0,
    RE: 0,
    FS: 0,
    JW: 0,
    HU: 0,
    VI: 0,
    LY: 0,
    ZM: 0
  };
  let result = !hasSameBlocks(blocks, word);
  return result;
};

function hasSameBlocks(blocks, word) {
  word.split('').forEach(char => {
    Object.keys(blocks).forEach(block => {
      if (block.includes(char.toUpperCase())) blocks[block] += 1;
    });
  });
  return Object.values(blocks).includes(2);
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true