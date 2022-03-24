//  iterate over the words of input string
//  remove all the non alphabetic characters from each word
//  combine all the words to form a single string without any spaces
//  split this new string into a character wise arr and iterate over it
//  sort the character wise array and return the sorted string

function alphabetized(str) {
  let wordsArr = str.split(' ').map(word => {
    return word.split('').filter(char => {
      char = char.toLowerCase();
      return isAlphanumeric(char);
    }).join('');
  });

  str = wordsArr.join('');
  return str.split('')
    .sort((a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    }).join('');

  // .sort((a, b) => a.localeCompare(b)).join('');
}

function isAlphanumeric(char) {
  if ((char >= 'a' && char <= 'z')) {
    return true;
  }
  return false;
}

console.log(alphabetized('The Holy Bible')); // 'BbeehHilloTy'