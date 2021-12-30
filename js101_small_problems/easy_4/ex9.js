let wordSizes = str => {
  let obj = {};
  let strArr = str.split(' ');

  if (str === '') return obj;

  strArr.forEach(word => {
    let wordLength = excludeNonLetters(word);

    if (obj.hasOwnProperty(wordLength)) {
      obj[wordLength] += 1;
    } else {
      obj[wordLength] = 1;
    }
  });

  return obj;
};

function excludeNonLetters(str) {
  let wordLength = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    if ((str[idx] >= 'a' && str[idx] <= 'z') || (str[idx] >= 'A' && str[idx] <= 'Z')) {
      wordLength += 1;
    }
  }
  return wordLength;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}