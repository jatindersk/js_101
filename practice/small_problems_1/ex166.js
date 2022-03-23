//  count each alphanumeric character occurances
//  if the count exists in the result object then just
//    push the current character to the associated array
//  otherwise create a new property
// https://www.codewars.com/kata/543e8390386034b63b001f31

let get_char_count = str => {
  str = str.toLowerCase();
  let charArr = str.split('').filter(isAlphanumric);
  let result = {};

  for (let idx = 0; idx < charArr.length; idx += 1) {
    let count = getCount(charArr, charArr[idx]);
    if (result[count] && !result[count].includes(charArr[idx])) {
      result[count].push(charArr[idx]);
    } else if (!result[count]) result[count] = [charArr[idx]];
  }

  sortObjectProperties(result);
  sortKeyValues(result);
  return result;
};

function sortKeyValues(result) {
  for (let key in result) {
    let value = result[key];
    result[key] = value.sort();
  }
}

function sortObjectProperties(result) {
  let sortedObj = {};
  result = Object.entries(result);
  result.sort((a, b) => b[1].length - a[1].length);
  // result.sort((a, b) => a[0].toLocaleString(b[0])).reverse();
  console.log(result);
  result.forEach(arr => {
    sortedObj[arr[0]] = arr[1];
  });
  return sortedObj;
}

function getCount(charArr, char) {
  return charArr.reduce((count, el) => {
    if (el === char) return ++count;
    return count;
  }, 0);
}

function isAlphanumric(char) {
  return (char >= 'a' && char <= 'z') ||
    (char >= '0' && char <= '9');
}

console.log(get_char_count("Mississippi")); // {4=>["i", "s"], 2=>["p"], 1=>["m"]}
// console.log(get_char_count("aaabbbccc")); // => {3=>["a", "b", "c"]}
// console.log(get_char_count("cba")); // => {1=>["a", "b", "c"]}
// console.log(get_char_count("Hello. Hello? HELLO!!")); // => {6=>["l"], 3=>["e", "h", "o"]}
// console.log(get_char_count("aaa...bb...c!")); // => {3=>["a"], 2=>["b"], 1=>["c"]}
// console.log(get_char_count("abc123")); // => {1=>["1", "2", "3", "a", "b", "c"]}