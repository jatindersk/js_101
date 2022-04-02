//  call leadingSubstrings function with a each sliced string as an argument
//  slice the substrings starting from index 0 upto the last index

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

console.log(substrings('abcde'));

// returns
["a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e"]