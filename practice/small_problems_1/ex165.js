//  iterate through each word
//  convert it to title case
//  if the word is a minor and not in the first index then
//    convert it to lowercase
//  the casing of supplied minor word doesn't matter

function titleCase(title, minorWords) {
  if (title === '') return '';

  if (minorWords === undefined) {
    return title.split(' ').map(word => {
      return word[0].toUpperCase() +
        word.slice(1).toLowerCase();
    }).join(' ');
  }

  return title.split(' ').map((word, idx) => {
    if (idx === 0) return word[0].toUpperCase() + word.slice(1).toLowerCase();
    return transformedWord(word, minorWords.split(' '));
  }).join(' ');
}

function transformedWord(word, minorWords) {
  for (let idx = 0; idx < minorWords.length; idx += 1) {
    minorWords[idx] = minorWords[idx].toLowerCase();
    if (minorWords[idx] === word.toLowerCase()) return word.toLowerCase();
  }
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings'
console.log(titleCase('')); // ''
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')); // 'The Quick Brown Fox'