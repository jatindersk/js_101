// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

//  input: string, output: string
//  rules:
//  - update every 2nd word in the string
//  - change the 4th character in every 2nd word to uppercase
//  - leave all other characters as it is

//  algo:
//  - iterate over the words of the input string
//  - implement the rules for every 2nd word

function toWeirdCase(str) {
  let words = str.split(' ');

  let strNew = words.map((word, idx) => {
    if ((idx + 1) % 2 === 0) return updateWord(word);
    return word;
  }).join(' ');

  return strNew;
}

function updateWord(word) {
  if (word.length < 4) return word;

  return word.split('').map((char, idx) => {
    if ((idx + 1) % 4 === 0) return char.toUpperCase();
    else return char;
  }).join('');
}

// Examples:
console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".