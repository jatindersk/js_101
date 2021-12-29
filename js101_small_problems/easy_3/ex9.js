let isLowerCase = char => {
  return (char >= 'a' && char <= 'z');
};

let isUpperCase = char => {
  return (char >= 'A' && char <= 'Z');
};

let cleanUp = str => {
  let idx = 0;
  let cleanText = '';

  while (idx < str.length) {
    if (isLowerCase(str[idx]) || isUpperCase(str[idx])) {
      cleanText += str[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
    idx += 1;
  }

  return cleanText;
};

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

// // My Approach: It's Complicated
// let cleanUp = str => {
//   let idx = 0;
//   let onlyAlphabets = '';

//   while (idx < str.length) {
//     if ((str[idx].charCodeAt() < 65 || str[idx].charCodeAt() > 122)
//     && onlyAlphabets[onlyAlphabets.length - 1] !== ' ') {
//       onlyAlphabets += ' ';
//     } else if (!(str[idx].charCodeAt() < 65 ||
// str[idx].charCodeAt() > 122)) {
//       onlyAlphabets += str[idx];
//     }
//     idx += 1;
//   }
//   return onlyAlphabets;
// };