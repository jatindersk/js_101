let wordToDigit = str => {
  let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let value of numArr) {
    str = str.replaceAll(value, numArr.indexOf(value));
  }
  return str;
};


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."


  // return str.split(' ').map(word => {
  //   let currentIdx = numArr.indexOf(removeNonAlphabets(word));
  //   if (currentIdx >= 0) return currentIdx;
  //   else return word;
  // }).join(' ');


// function removeNonAlphabets(str) {
//   return str.split('').filter(char => {
//     char = char.toLowerCase();
//     return (char >= 'a') && (char <= 'z');
//   }).join('');
// }