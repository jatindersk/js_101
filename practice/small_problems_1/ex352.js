function leadingSubstrings(str) {
  return str.split('').reduce((acc, _, idx) => {
    acc.push(str.slice(0, (idx + 1)));
    return acc;
  }, []);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]