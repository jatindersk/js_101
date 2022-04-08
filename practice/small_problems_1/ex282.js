//  input: string, output: string
//  algo:
//  - if the string has multiple words then extract each word and transform it
//  - extract a substring leaving behind first and last letters
//  - the special characters remain in their original place
//  - remove the special characters from the substring
//  - sort the letters of the substring alphabetically
//  - concatenate the sorted substring to the first and last letters

let ScrambleWords = function(str) {
  let wordsArr = str.split(' ');
  wordsArr = wordsArr.map(word => transformWord(word));

  return wordsArr.join(' ');
};

function transformWord(str) {
  if (str.length < 4) return str;
  let obj = {};
  let leftOverString = [];

  let substring = getSubstring(str, leftOverString);

  substring.split('').forEach((char, idx) => {
    if (`-.',`.includes(char)) obj[char] = idx;
  });

  substring = substring.split('').filter(char => {
    return !(char.toUpperCase() === char.toLowerCase());
  }).sort().join('');

  for (let key in obj) {
    substring = substring.slice(0, obj[key]) + key + substring.slice(obj[key]);
  }
  return leftOverString[0] + substring + leftOverString[1];
}

function getSubstring(str, leftOverString) {
  if (`-.',`.includes(str[0])) {
    leftOverString.push(str.slice(0, 2), str[str.length - 1]);
    return str.slice(2, str.length - 1);
  } else if (`-.',`.includes(str[str.length - 1])) {
    leftOverString.push(str[0], str.slice(str.length - 2));
    return str.slice(1, str.length - 2);
  } else {
    leftOverString.push(str[0], str[str.length - 1]);
    return str.slice(1, str.length - 1);
  }
}

console.log(ScrambleWords("you've a. gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."));
// "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul
// neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.")); // 'Must handle a full sentence')

// console.log(ScrambleWords('-dcba')); // '-dbca'
// console.log(ScrambleWords('professionals')); // 'paefilnoorsss', 'The first and last letters of a word should reamin in place with the inner letters sorted'
// console.log(ScrambleWords('i')); // 'i', 'Must handle single charater words'
// console.log(ScrambleWords('me')); // 'me', 'Must handle 2 charater words'
// console.log(ScrambleWords('you')); // 'you', 'Must handle 3 charater words'
// console.log(ScrambleWords('card-carrying')); // 'caac-dinrrryg', 'Only spaces separate words and punctuation should remain at the same place as it started'