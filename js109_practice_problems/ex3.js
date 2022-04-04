// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

//  every 4th character in every 2nd word
//  that is odd indices
//  if the 4th character doesn't exists then do nothing

let toWeirdCase = str => {
  let result = str.split(' ').map((word, idx) => {
    if (idx % 2 === 1) {
      if (word[3] !== undefined) {
        return transformFourth(word);
      }
    }
    return word;
  }).join(' ');

  return result;
};

function transformFourth(word) {
  for (let idx = 3; idx < word.length; idx += 4) {
    word = word.slice(0, idx) + word[idx].toUpperCase() + word.slice(idx + 1);
  }
  return word;
}

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