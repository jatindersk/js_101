// algorithm: (!! Discard !!)
//  - declare and initialize an object 'digits' which will
//  contain a digit corresponding to the 'number word'
//  - decalre and initialize a 'result' variable to an empty
//  string
//  - iterate over the input string
//  - in each iteration, pass the word as key to 'digits' object
//  and check whether the key exists by using 'hasOwnProperty' method
//  - if it returns true, then replace the word by corresponding digit
//  - else return the word as it is

let wordToDigit = str => {
  let digits = {
    zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5',
    six: '6', seven: '7', eight: '8', nine: '9'
  };
  for (let key in digits) {
    str = str.replaceAll(key, digits[key]);
  }
  return str;
};

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// let result = '';
//   let wordsArr = str.split(' ');
//   // console.log(wordsArr);
//   for (let idx = 0; idx < str.wordsArr; idx += 1) {
//     // console.log(`${digits.hasOwnProperty(wordsArr[idx])}`);
//     if (digits.hasOwnProperty(wordsArr[idx])) {
//       result += digits[wordsArr[idx]];
//     } else {
//       result += wordsArr[idx];
//     }
//   }
//   return result;