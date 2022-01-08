let palindromes = str => {
  return  isPalindrome(returnSubstrings(str));
};

function isPalindrome(subStr) {
  return subStr.filter(word => {
    if (word.length > 1) {
      return word === word.split('').reverse().join('');
    }
    return undefined;
  });
}

function returnSubstrings(str) {
  let subStr = [];
  for (let idx = 0; idx < str.length - 1; idx += 1) {
    for (let inx = idx + 1; inx <= str.length; inx += 1) {
      subStr.push(str.slice(idx, inx));
    }
  }
  //console.log(subStr);
  return subStr;
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