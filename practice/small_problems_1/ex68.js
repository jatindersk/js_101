function cleanUp(str) {
  let result = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (isAlphabet(str[idx].toLowerCase())) result += str[idx];
    else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }
  return result;
}

let isAlphabet = char => char >= 'a' && char <= 'z';

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "