//  extract the substring which excludes first and last characters // 'fi-rst'
//  filter the non alphabets out of the substring
//  extract the special characters along with their index numbers to an array
//  sort the resulting substring alphabetically
//  insert the extracted special characters back to the substring at their
//    respective indices

let ScrambleWords = function (str) {
  if (str.length < 3) return str;
  let subStr = isAlphabet(str[0]) ?
    str.slice(1, str.length - 1) : str.slice(2, str.length - 1);
  console.log(`subStr is ${subStr}`);
  let nonAlphabets = subStr.split('').map((char, idx) => {
    char = char.toLowerCase();
    if (char >= 'a' && char <= 'z') return '';
    else return [char, idx];
  }).filter(el => Array.isArray(el));

  subStr = subStr.split('').filter(char => char >= 'a' && char <= 'z')
    .sort().join('');

  nonAlphabets.forEach(arr => {
    let subArr = subStr.split('');
    subArr.splice(arr[1], 0, arr[0]).join('');
    subStr = subArr.join('');
  });
  return isAlphabet(str[0]) ? str[0] + subStr + str[str.length - 1] :
    str[0] + str[1] + subStr + str[str.length - 1];
};

function isAlphabet(char) {
  return char >= 'a' && char <= 'z';
}

// console.log(ScrambleWords('professionals')); // 'paefilnoorsss', 'The first and last letters of a word should reamin in place with the inner letters sorted'
// console.log(ScrambleWords('i')); // 'i', 'Must handle single charater words'
// console.log(ScrambleWords('me')); // 'me', 'Must handle 2 charater words'
// console.log(ScrambleWords("shan't")); // "sahn't", 'Punctuation should remain at the same place as it started'
console.log(ScrambleWords('-dcba')); // '-dbca', 'Must handle special character at the start')
// console.log(ScrambleWords('dcba.')); // 'dbca.', 'Must handle special character at the end'