// let leadingSubstrings = str => {
//   let resultArr = [];
//   for (let idx = 1; idx <= str.length; idx += 1) {
//     resultArr.push(str.slice(0, idx));
//   }
//   return resultArr;
// };

// Further exploration:

function leadingSubstrings(str) {
  let charArr = str.split('');
  return charArr.reduce((acc, _, idx, array) => {
    return acc.concat(array.slice(0, idx + 1).join(''));
  }, []);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]