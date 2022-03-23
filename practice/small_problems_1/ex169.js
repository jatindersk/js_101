//  declare a result variable and initalize it an empty array
//  find all the substrings
//  check if the substring is alphabetically sorted
//  if yes: find the length of substring
//  if no: skip to find next substring
//  check whether result array already contains a substring
//    of length greater than the current subtring
//  if yes: skip to find next substring
//  if no: push the current substring along with it's length as
//    a nested array
//  the result array will have the substring with max length at the end
//  return it!!

function longest(str) {
  let result = [];
  for (let outer = 0; outer < str.length; outer += 1) {
    for (let inner = outer + 1; inner <= str.length; inner += 1) {
      let subStr = str.slice(outer, inner);
      if (subStr !== subStr.split('').sort().join('')) continue;
      if (result.some(el => el[1] >= subStr.length)) continue;
      result.push([subStr, subStr.length]);
    }
  }

  return result[result.length - 1][0];
}

console.log(longest("asdfaaaabbbbcttavvfffffdf")); // "aaaabbbbctt"