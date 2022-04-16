function wordToDigit(str) {
  const DIGITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let digit of DIGITS) {
    str = str.replaceAll(String(digit), DIGITS.indexOf(digit));
  }

  return str;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."