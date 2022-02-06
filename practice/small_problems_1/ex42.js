//  input: string, output: string
//  algorithm:
//  - iterate through the string character by character
//  - if current character is not an alphabet then replace it with
//  a space character
//  - to remove consecutive spaces, call another function
//  - this function will check whether the next character is a space
//  character. If yes, then it will continue to next character else
//  it will concatenate the current character to an empty string

let cleanUp = str => {
  return removeNonAlphabets(str);
};

function removeNonAlphabets(str) {
  let result = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx].toLowerCase() >= 'a' && str[idx].toLowerCase() <= 'z') result += str[idx];
    else if (result[result.length - 1] !== ' ') result += ' ';
  }
  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "


// function removeConsecutiveSpaces(str) {
//   console.log(`str length:: ${str.length}`);
//   let idx = 0;
//   let result = '';
//   while (idx < str.length) {
//     if (str[idx] === ' ' && str[idx + 1] === ' ') continue;
//     else if (str[idx] === ' ' && str[idx + 1] !== ' ') {
//       result += str[idx];
//     } else {
//       result += str[idx];
//     }
//     console.log(`result string:: ${result}`);
//     idx += 1;
//   }
//   return result;
// }