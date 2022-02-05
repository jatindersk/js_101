function wordSizes(str) {
  let result = {};
  if (str.length === 0) return result;

  str.split(' ').forEach(word => {
    word = onlyLetters(word.split(''));
    let length = word.length;
    result[length] = result[length] || 0;
    result[length] += 1;
  });
  return result;
}

function onlyLetters(charArr) {
  return charArr.filter(char => isAlphabet(char)).join('');
}

function isAlphabet(char) {
  char = char.toLowerCase();
  return (char >= 'a' && char <= 'z');
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}