function leadingSubstrings(str) {
  return str.split('').reduce((acc, _, idx) => {
    acc.push(str.slice(0, (idx + 1)));
    return acc;
  }, []);
}

function substrings(str) {
  let result = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    result = result.concat(leadingSubstrings(str.slice(idx)));
  }
  return result;
}

function palindromes(str) {
  let subStr = substrings(str);

  return subStr.filter(str => {
    return str.length !== 1 && str === str.split('').reverse().join('');
  });
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