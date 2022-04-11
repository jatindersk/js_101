//  input: string, output: array
//  algo:
//  - replace all the characters in the string except `'`
//    or letters with whitespace
//  - find the words in the input string by splitting the
//    string using whitespace
//  - filter out the words that are empty strings
//  - declare a result variable = {}
//  - iterate over the words and create a new property for
//    each word in the result object
//  - make words lowercase before comparison and while
//    creating the properties
//  - handle the edge cases

//  - If a text contains fewer than three unique words,
//    then either the top-2 or top-1 words should be returned
//  - at the end of the function : if the sorted array has
//    a length >= 3 we return first three words
//  - else return all the words

//  noWords function (edge case):
//  - if the text (string) has not letters at all then
//    return true
//  - iterate over the characters of the string
//  - if none of the characters are letters then return true
//    else return false

function topThreeWords(text) {
  let result = {};
  let sorted;

  text = text.split('').map(char => {
    if (!isAlphabet(char) && !isApostrophe(char)) {
      return ' ';
    } else return char;
  }).join('');

  if (noWords(text)) return [];

  text = text.split(' ').filter(word => word !== '');

  text.forEach(word => {
    word = word.toLowerCase();
    result[word] = result[word] || 0;
    result[word] += 1;
  });

  sorted = Object.keys(result).sort((a, b) => result[b] - result[a]);
  if (sorted.length >= 3) return sorted.slice(0, 3);
  return sorted;
}

function noWords(text) {
  let charArr = text.split('');
  const ALPHABETS = `abcdefghijklmnopqrstuvwxyz`;
  return !charArr.some(char => ALPHABETS.includes(char));
}

function isAlphabet(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

function isApostrophe(char) {
  return char === `'`;
}

console.log(topThreeWords("  //wont won't won't ")); // ["won't", "wont"]
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); // ['e','d','a']
console.log(topThreeWords("a a c b b")); // ['a','b','c']
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // ['e','ddd','aa']
console.log(topThreeWords("  , e   .. ")); // ["e"]
console.log(topThreeWords("  ...  ")); // []
console.log(topThreeWords("  '  ")); // []