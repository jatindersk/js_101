let wordToDigit = str => {
  let numObj = {
    zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7',
    eigth: '8', nine: '9'
  };

  let newStr;

  for (let key in numObj) {
    console.log(`pre: ${key}::: ${newStr}`);
    newStr = str.replaceAll(key, numObj[key]);
    console.log(`newStr: ${key}::: ${newStr}`);
  }
  return newStr;
};

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."