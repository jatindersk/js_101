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

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]