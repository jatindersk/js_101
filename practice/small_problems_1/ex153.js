//  create all possible substrings
//  select the substring where each element is an odd number
//  count these substrings

function solve(string) {
  let subStr = returnSubStrings(string);
  subStr = selectOddSubstrings(subStr);
  return subStr.length;
}

function selectOddSubstrings(subStrArr) {
  return subStrArr.filter(str => {
    return Number(str) % 2 === 1;
  });
}

function returnSubStrings(string) {
  let subStr = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    for (let inner = idx + 1; inner <= string.length; inner += 1) {
      subStr.push(string.slice(idx, inner));
    }
  }
  return subStr;
}

console.log(solve("1341")); // 7
console.log(solve("1357")); // 10
console.log(solve("13471")); // 12
console.log(solve("134721")); // 13