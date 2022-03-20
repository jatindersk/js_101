//  determine the index numbers of uppercase letters
//  split the string from the found index number
//  extract and concatenate the first half of the split string
//    to the result string
//  repeat the above process for the second half of the string until
//    no more uppercase letters are available

function kebabize(str) {
  if (str === str.toLowerCase()) {
    return removeNonAlphabets(str.split('')).filter(str => str !== '').join('');
  }
  let result = [];

  let start = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    if (isAlphabet(char) && char === char.toUpperCase()) {
      result.push(str.slice(start, idx));
      start = idx;
    }
  }
  result.push(str.slice(start));

  result = removeNonAlphabets(result);

  return result.filter(str => str !== '').join('-').toLowerCase();
}

function isAlphabet(char) {
  char = char.toLowerCase();
  return char >= 'a' && char <= 'z';
}

function removeNonAlphabets(result) {
  return result.map(str => {
    return str.split('').filter(char => {
      char = char.toLowerCase();
      return char >= 'a' && char <= 'z';
    }).join('');
  });
}

// console.log(kebabize('camelsHaveThreeHumps')); // camels-have-three-humps
// console.log(kebabize('camelsHave3Humps')); // camels-have-humps
// console.log(kebabize('wt8Ta8')); // wt-ta
// console.log(kebabize('PPppKkkk'));
console.log(kebabize('sm8aW'));

'444HhhhJjjj'
'55jJ5Jjj'