let removeVowels = arr => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  return arr.map(str => {
    return str.split('').filter(letter => {
      return !vowels.includes(letter.toLowerCase());
    }).join('');
  });
};

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]