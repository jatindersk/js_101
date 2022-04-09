//  algo:
//  - transform each word to first letter uppercased
//  - concatenate all the words
//  - put # as the first character
//  - if input or result is an empty string return false
//  - if the final string has more than 140 charcaters return false

function generateHashtag(str) {
  str = str.trim();
  if (str.length === 0) return false;

  let wordsArr = str.split(' ').filter(word => word !== '');
  str = wordsArr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');

  if (('#' + str).length > 140) return false;
  else return '#' + str;
}

console.log(generateHashtag("a".repeat(139))); // "#A" + "a".repeat(138), "Should work"));
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
// console.log(generateHashtag("code    wars"));
// console.log(generateHashtag(" Hello there thanks for trying my Kata")); //  "#HelloThereThanksForTryingMyKata"
// console.log(generateHashtag(""));   //  false
// console.log(generateHashtag(" "));  //  false