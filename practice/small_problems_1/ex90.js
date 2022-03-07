//  find out substrings
//  check whether they are palindromes
//  duplicate substrings to be included multiple times
//  consider casing and all characters when deciding a palindrome
//  one letter substrings are not palindromes

let palindromes = str => {
  let subStrArr = findSubstrings(str);
  return subStrArr.filter(subStr => isPalindrome(subStr));
};

function isPalindrome(subStr) {
  if (subStr.length < 2) return false;
  return subStr === subStr.split('').reverse().join('');
}

function findSubstrings(str) {
  let subStrings = [];
  for (let outerIdx = 0; outerIdx < str.length; outerIdx += 1) {
    for (let innerIdx = outerIdx + 1; innerIdx <= str.length; innerIdx += 1) {
      subStrings.push(str.slice(outerIdx, innerIdx));
    }
  }
  return subStrings;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]