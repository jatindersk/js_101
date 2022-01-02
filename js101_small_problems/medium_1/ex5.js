let wordToDigit = str => {
  let label = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };
  let textNum = Object.keys(label);

  textNum.forEach(key => {
    str = str.replaceAll(key, label[key]);
  });

  return str;

  // return str.split(' ').map(word => {

  //   let lastIdx = word.length - 1;
  //   if (!(word[lastIdx].toLowerCase() >= 'a' && word[lastIdx].toLowerCase() <= 'z')) {
  //     word = word.slice(0, lastIdx);
  //   }

  //   return textNum.includes(word) ? label[word] : word;
  // }).join(' ');
};

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."