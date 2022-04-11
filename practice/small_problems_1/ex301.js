//  input: string, output: string
//  rules:
//  - whenever we have an uppercase letter it
//    means the start of a new word

//  algo:
//  - declare a words variable = []
//  - filter out the non letter characters in the input string
//  - iterate over the characters of the string
/// - if we encounter an uppercase letter
//    - slice the string and push the substring (word)
//      to the words array
//  - remove all the empty string in the words array
//  - lower case all the words in the words array
//  - concatenate all the words using a hyphen (-)
//    and return the final word

function kebabize(str) {
  let words = [];
  let start = 0;
  let end;

  str = removeNonLetters(str);

  for (let idx = 0; idx <= str.length; idx += 1) {
    if ((idx === str.length) || (str[idx] === str[idx].toUpperCase())) {
      end = idx;
      words.push(str.slice(start, end));
    }
    start = end;
  }

  words = words.filter(word => word !== '');
  return words.map(word => word.toLowerCase()).join('-');
}

function removeNonLetters(str) {
  return str.split('')
    .filter(char => char.toLowerCase() !== char.toUpperCase())
    .join('');
}

console.log(kebabize('Zwi')); // zwi
// console.log(kebabize('camelsHaveThreeHumps')); // camels-have-three-humps
// console.log(kebabize('camelsHave3Humps')); // camels-have-humps