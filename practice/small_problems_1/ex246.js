let leadingSubstrings = str => {
  let strArr = str.split('');

  return strArr.reduce((acc, _, idx) => {
    acc.push(strArr.slice(0, idx + 1).join(''));
    return acc;
  }, []);
};

let substrings = str => {
  let result = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    result.push(...leadingSubstrings(str.slice(idx))
      .sort((a, b) => a.length - b.length));
  }

  return result;
};

let palindromes = str => {
  let subStr = substrings(str);
  console.log(subStr.filter(str => {
    return str === str.split('').reverse().join('') &&
      str.length > 1;
  }));
};

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]