//  input: string, output: string
//  rules:
//  - the 2nd argument will be used to determine whether other words
//    should be title case
//  - first word is always in Uppercase
//  - if the 2nd argument is missing then title case all the words

//  algo:
//  - get the array of words
//  - title case the 1st word always
//  - do not title case the word which is in 2nd argument string
//    - get the array of words for the 2nd string argument
//    - compare each word from the 1st string to the word in 2nd string
//    - if matched then lowercase the word
//    - if no match then title case the word

function titleCase(title, minorWords) {
  let wordsArr = title.split(' ');
  let result;

  if (title.length === 0) return '';

  if (minorWords === undefined) return wordsArr.map(word =>
    word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');

  let minorWordsArr = minorWords.split(' ');

  let transformedWords = wordsArr.slice(1).map(word => {
    if (!isTitleCase(word, minorWordsArr)) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word.toLowerCase();
    }
  }).join(' ');

  result = wordsArr[0][0].toUpperCase() + wordsArr[0].slice(1).toLowerCase() + ' ' + transformedWords;
  return result.trim();
}

function isTitleCase(word, arr) {
  return arr.some(el => word.toLowerCase() === el.toLowerCase());
}

console.log(titleCase('a clash of KINGS', 'a an the of')); // should return: 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // should return: 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')); // should return: 'The Quick Brown Fox'