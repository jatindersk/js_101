let leadingSubstrings = str => {
  let strArr = str.split('');

  return strArr.reduce((acc, _, idx) => {
    acc.push(strArr.slice(0, idx + 1).join(''));
    return acc;
  }, []);
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// let leadingSubstrings = str => {
//   let result = [];

//   for (let idx = 1; idx <= str.length; idx += 1) {
//     result.push(str.slice(0, idx));
//   }

//   console.log(result);
// };