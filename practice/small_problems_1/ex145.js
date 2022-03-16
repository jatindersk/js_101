//  find all substrings
//  for each substring do the following:
//  - keep appending the substring to itself until the resulting
//    string's length is equal to the input string
//  - if the lengths are equal then compare the resulting substring
//    and the input string
//  - if same return true
//  - else move on to next substring and repeat

let repeatedSubstringPattern = str => {
  let subStrArr = findSubstrings(str);
  // console.log(subStrArr);
  for (let idx = 0; idx < subStrArr.length; idx += 1) {
    let newString = '';
    while (true) {
      newString += subStrArr[idx] + subStrArr[idx];
      // console.log(`subString = ${subStrArr[idx]}...newStr: ${newString}`);
      if (newString.length === str.length) {
        if (newString === str) return true;
        else break;
      } else if (newString.length > str.length) break;
    }
  }
  return false;
};

function findSubstrings(str) {
  let subStrArr = [];
  for (let outer = 0; outer < str.length; outer += 1) {
    for (let inner = outer + 1; inner <= str.length; inner += 1) {
      subStrArr.push(str.slice(outer, inner));
    }
  }
  return subStrArr;
}

console.log(repeatedSubstringPattern('aba') === false);
console.log(repeatedSubstringPattern('aabaaba') === false);
console.log(repeatedSubstringPattern('abab') === true);
console.log(repeatedSubstringPattern('abaababaab') === true);
console.log(repeatedSubstringPattern('abcabcabcabc') === true);