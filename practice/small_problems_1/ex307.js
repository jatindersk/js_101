//  input: string, output: string

//  algo:
//  - iterate over the words of input string and transform them as follows:

//  - replace the character code of each word with it's corresponding letter
//  - now extract the part of the word after the character code
//  - swap the first and last letters of the this extracted portion
//    of currentword
//  - concatenate the first letter obtained from character code and the
//    portion of word with 1st and last letters swapped
//  - return this concatenated string as transformed word
//  - return these transformed words as the result string

function decipherThis(str) {
  let words = str.split(' ');
  let firstLetter;

  words = words.map(word => {
    firstLetter = String.fromCharCode(parseInt(word, 10));
    word = onlyLetters(word);
    return firstLetter + swapLetters(word);
  });

  return words.join(' ');
}

function onlyLetters(str) {
  let currentChar;
  let startIdx;

  for (let idx = 0; idx < str.length; idx += 1) {
    currentChar = str[idx];

    if (!'0123456789'.includes(currentChar)) {
      startIdx = str.indexOf(currentChar);
      return str.slice(startIdx);
    }
  }
  return '';
}

function swapLetters(str) {
  let charArr = str.split('');
  [charArr[0], charArr[charArr.length - 1]] =
    [charArr[charArr.length - 1], charArr[0]];

  return charArr.join('');
}

console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'