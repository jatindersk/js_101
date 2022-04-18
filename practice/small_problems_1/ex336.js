function cleanUp(str) {
  let result = '';

  str = str.split('').map(char => {
    if (char.toLowerCase() !== char.toUpperCase()) {
      return char;
    } else return ' ';
  }).join('');

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    if (result[result.length - 1] === ' ' && char === ' ') continue;
    else result += char;
  }
  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "