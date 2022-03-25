//  - switch back the second and last letters of each word
//  - get the 1st letter back from the character code
//  - return the string

function decipherThis(str) {
  let result = str.split(' ').map(word => {
    let onlyLetters;
    let result = '';

    result += String.fromCharCode(returnCharCode(word));
    onlyLetters = getLetters(word).split('');
    [onlyLetters[0], onlyLetters[onlyLetters.length - 1]] =
      [onlyLetters[onlyLetters.length - 1], onlyLetters[0]];

    result += onlyLetters.join('');
    return result;
  }).join(' ');

  return result;
}

function getLetters(word) {
  let letters = '';
  word.split('').forEach(char => {
    if (char.toLowerCase() !== char.toUpperCase()) letters += char;
  });
  return letters;
}

function returnCharCode(word) {
  let code = '';
  word.split('').forEach(char => {
    if (!(char.toLowerCase() !== char.toUpperCase())) code += char;
  });
  return +code;
}

console.log(decipherThis('72olle 103doo 100ya')); // // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'