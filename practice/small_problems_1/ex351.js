function leadingSubstrings(str) {
  let result = [];
  let end = 1;

  while (end <= str.length) {
    result.push(str.slice(0, end));
    end += 1;
  }
  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]