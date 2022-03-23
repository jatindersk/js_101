//  concatenate all the words prepended by a # character
//  if the final string has a length > 140 return false
//  if the input string is empty return false

function generateHashtag(str) {
  str = str.trim();
  if (str === '') return false;
  let result = '#';
  result += str.split(' ').filter(word => word !== '')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('');

  return result.length > 140 || result.length < 2 ? false : result;
}

console.log(generateHashtag("")); // false, "Expected an empty string to return false"
console.log(generateHashtag(" ".repeat(200))); // false, "Expected an empty string to return false"
console.log(generateHashtag("Do We have A Hashtag")); // "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning."
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); // "#CodeWars"