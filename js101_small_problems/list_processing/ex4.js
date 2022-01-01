let leadingSubstrings = str => {
  let result = [];
  let tempStr = '';
  str.split('').forEach(letter => {
    tempStr += letter;
    result.push(tempStr);
  });

  return sortingFunc(result);
};

function sortingFunc(arr) {
  return arr.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else {
      return 0;
    }
  });
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]