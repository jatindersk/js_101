//  input: string, output: string
//  algorithm:
//  - declare and initialize an object containing numerics from '0' to '9'
//  - convert the input string to an array and iterate over it
//  - return a new transformed array
//  - if the array element exists in the

let wordToDigit = str => {
  const DIGITS = {
    zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8',
    nine: '9'
  };
  Object.keys(DIGITS).forEach(numWord => {
    if (str.includes(numWord)) str = str.replaceAll(numWord, DIGITS[numWord]);
  });
  return str;
};

// // alternate:

// let wordToDigit = str => {
//   const DIGITS = {
//     zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8',
//     nine: '9'
//   };
//   return str.split(' ').map(word => {
//     for (let numWord in DIGITS) {
//       if (word.includes(numWord)) return DIGITS[numWord];
//     }
//     return word;
//   }).join(' ');
// };

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."