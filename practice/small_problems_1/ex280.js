//  each block can be used only once
//  each letter from each block can be used only once

//  declare an array and save the blocks in the array
//  convert the input string to uppercase
//  iterate over the input string character by character
//  find the index of the block containing the character
//  if index found is greater than -1 then remove the block concerned
//  if index found is -1 then return false
//  if index found is always greater than -1 then return true

function isBlockWord(str) {
  str = str.toUpperCase();
  let charArr = str.split('');
  const BLOCKS = ['B:O', 'X:K', 'D:Q', 'C:P', 'N:A', 'G:T', 'R:E',
    'F:S', 'J:W', 'H:U', 'V:I', 'L:Y', 'Z:M'];

  for (let idx = 0; idx < charArr.length; idx += 1) {
    let currentChar = charArr[idx];
    let indexFound = returnIndex(BLOCKS, currentChar);

    if (indexFound >= 0) {
      BLOCKS.splice(indexFound, 1);
    } else return false;
  }
  return true;
}

function returnIndex(BLOCKS, currentChar) {
  return BLOCKS.findIndex(block => block.includes(currentChar));
}

console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('jest'));       // true