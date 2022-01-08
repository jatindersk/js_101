// // algorithm:
// //  - slice the input string to get the substrings and store in an array
// //  - call sort method in the array

// let leadingSubstrings = str => {
//   let idx = 1;
//   let result = [];
//   while (idx <= str.length) {
//     result.push(str.slice(0, idx));
//     idx += 1;
//   }
//   return result.sort(sortByLength);
// };

// function sortByLength(sub1, sub2) {
//   if (sub1 < sub2) {
//     return -1;
//   } else if (sub1 > sub2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// Further Eploration:
let leadingSubstrings = str => {
  let result = [];
  str.split('').reduce((substr, letter) => {
    result.push(substr + letter);
    return substr + letter;
  }, '');
  return result;
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]