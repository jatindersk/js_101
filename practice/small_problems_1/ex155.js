//  find all substrings
//  iterate through the substrings
//  for each subtring:
//  - check whether the substrings length is a multiple of
//    original string's length
//  - if yes, then repeat the substring for counter amount of times
//    and check whether the resulting string is equal to the original
//    string and return the results

function f(str) {
  let subStr = returnSubStrings(str);

  for (let idx = 0; idx < subStr.length; idx += 1) {
    if (str.length % subStr[idx].length === 0) {
      let counter = str.length / subStr[idx].length;
      if (subStr[idx].repeat(counter) === str) {
        return [subStr[idx], counter];
      }
    }
  }
}

function returnSubStrings(str) {
  let subStr = [];
  for (let outer = 0; outer < str.length; outer += 1) {
    for (let inner = outer + 1; inner <= str.length; inner += 1) {
      subStr.push(str.slice(outer, inner));
    }
  }
  return subStr;
}

console.log(f("ababab")); // ["ab", 3])
console.log(f("abcde")); // ["abcde", 1]


// for (let idx = 0; idx < subStr.length; idx += 1) {
//   if (subStr[idx] === str) return [subStr[idx], counter];
//   while (newStr.length <= str.length) {
//     newStr += subStr[idx];
//     if (newStr.length === str.length && newStr === str) return [subStr[idx], counter];
//     counter += 1;
//   }
//   newStr = '';
//   counter = 1;
// }
// }