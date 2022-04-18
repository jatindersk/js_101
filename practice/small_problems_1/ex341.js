function removeVowels(arr) {
  const VOWELS = 'aeiou';

  return arr.map(str => {
    return str.split('')
      .filter(char => !VOWELS.includes(char.toLowerCase()))
      .join('');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]