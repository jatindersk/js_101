//  input: array, output: array

//  rules:
//  - returned array must not have duplicates
//  - strings in the returned array should be
//    substrings of strings in a2
//  - strings in returned array should be sorted
//    lexicographically

//  algo:
//  - iterate over the elements of a1
//  - check whether the current string is a substring
//    of any string in a2
//  - if yes then select the current string from a1
//  - sort the strings in a1 lexicographically and return
//    the sorted array

//  check whether the current string is a substring
//  of any string in a2
//  - iterate over the strings in a1
//  - find the substring of length equal to current string
//    from a1 in iteration
//  - if the substring from a2 mathch the current string from
//    a1 then return true else return false

function inArray(array1, array2) {
  let result = array1.filter(str => {
    return array2.some(el => hasASubstring(el, str));
  });

  return result.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
}

function hasASubstring(el, str) {
  for (let start = 0; start < el.length; start += 1) {
    for (let end = start + 1; end <= el.length; end += 1) {
      let subStr = el.slice(start, end);
      if (subStr.length !== str.length) continue;

      if (subStr === str) return true;
    }
  }
  return false;
}

let a1;
let a2;

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

a1 = ["xyz", "live", "strong"];
console.log(inArray(a1, a2)); // ["live", "strong"]

// a1 = ["live", "strong", "arp"];
// console.log(inArray(a1, a2)); // ["arp", "live", "strong"]

// a1 = ["tarp", "mice", "bull"];
// console.log(inArray(a1, a2)); // []