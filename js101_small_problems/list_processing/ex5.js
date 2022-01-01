let substrings = str => { // 'abcde'
  let allSubstr = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    allSubstr.push(...leadingSubstrings(str.slice(idx)));
  }

  return allSubstr;
};

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]