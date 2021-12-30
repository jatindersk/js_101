let swap = str => {
  if (str.length === 1) return str;

  let strArr = str.split(' ');

  let flippedWordsArr = strArr.map(word => {
    let flippedWord = '';
    flippedWord += word[word.length - 1]
      + word.slice(1, (word.length - 1)) + word[0];

    return flippedWord;
  });
  return flippedWordsArr.join(' ');
};

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"