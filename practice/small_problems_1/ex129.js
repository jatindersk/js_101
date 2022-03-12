function toCamelCase(str) {
  if (str === '') return '';
  let strArr = str.split('');
  let wordsArr;
  wordsArr = strArr.includes('_') ? str.split('_') : str.split('-');

  return wordsArr.map(word => {
    if (word[0] === strArr[0][0]) return word;
    return word[0].toUpperCase() + word.slice(1);
  }).join('');
}

console.log(toCamelCase("")); // ""
console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior",


// if (strArr.includes('_')) {
//   wordsArr = str.split('_');
//   wordsArr.map(word => {
//     if (word[0] === strArr[0][0]) return word;
//     return word[0].toUpperCase() + word.slice(1);
//   }).join('');
// } else {
//   wordsArr = str.split('-');
//   wordsArr.map(word => {
//     if (word[0] === strArr[0][0]) return word;
//     return word[0].toUpperCase() + word.slice(1);
//   }).join('');
// }