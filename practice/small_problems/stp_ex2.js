// algorithm:
//  - iterate through the string
//  - check every letter to be a vowel
//  - if letter is a vowel, reject it

let removeVowels = arr => {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  return arr.map(str => {
    return str
      .split('')
      .filter(letter => !VOWELS.includes(letter.toLowerCase()))
      .join('');
  });
};

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]