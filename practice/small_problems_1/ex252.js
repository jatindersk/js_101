function removeVowels(arr) {
  return arr.map(str => str.split('').filter(removeVowel).join(''));
}

function removeVowel(char) {
  char = char.toLowerCase();
  return !'aeiou'.includes(char);
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]