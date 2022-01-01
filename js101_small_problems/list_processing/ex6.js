function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

function substrings(str) { // 'abcde'
  let allSubstr = [];

  for (let idx = 0; idx < str.length - 1; idx += 1) {
    allSubstr.push(...leadingSubstrings(str.slice(idx)));
  }

  return allSubstr;
}

let palindromes = str => {

  return substrings(str).filter(sub => {
    if (sub.length > 1) {
      return sub === sub.split('').reverse().join('');
    }
    return undefined;
  });
};

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