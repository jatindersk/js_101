// requirements:
//  - replace each non alphabetic characters with a space
//  - replace consecutive spaces with a single space
// algorithm:
//  - loop through the string and compare each character with
//  a range from 'a' to 'z' and 'A' to 'Z'
//  - define a variable 'result' and assign it to an empty string
//  - if character is within alphabetical range, then concatenate
//  it to the 'result' variable
//  - otherwise concatenate space character to 'result'
//  - replace consecutive empty space characters with a single space
//    - if current and next characters are space, then concatenate an
//    - empty space character to the 

let cleanUp = str => {
  let result = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if ((str[idx] >= 'a' && str[idx] <= 'z') || (str[idx] >= 'A' && str[idx] <= 'Z')) {
      result += str[idx];
    } else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }
  return result;
};

// function reduceSpace(str) {
//   let result = '';
//   for (let idx = 0; idx <= str.length; idx += 1) {
//     if (str[idx] !== ' ') {
//       result += str[idx]
//     }
//   }
// }

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "