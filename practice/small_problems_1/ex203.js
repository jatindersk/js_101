//  - save the state of casing of the letters in input array
//  - then convert all elements in input arr to lowercase

//  - declare a const variable alphabets = 'abcdefghijklmnopqrstuvwxyz'
//  - find the length of the input array
//  - match the first letter from input array to the alphabets string
//  - once matched, find it's index in alphabets string
//  - extract the substring from the alphabets string having the same letters
//    as the input string
//  - iterate over the alphabets substring and match each letter from input arr
//  - return the character which doesn't match it's counterpart in input array
//  - before returning the character update it's case to the appropriate one

function findMissingLetter(array) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let len = array.length;
  let result;
  let isUpperCase = array[0] === array[0].toUpperCase();
  array = array.map(char => char.toLowerCase());

  let index = alphabets.indexOf(array[0]);
  let subStr = alphabets.slice(index, index + len);

  result = subStr.split('').find((letter, idx) => letter !== array[idx]);

  if (isUpperCase) return result.toUpperCase();
  return result;
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // 'P'

// ((letter, idx) => {
//   if (letter !== array[idx]) result = letter;
// });