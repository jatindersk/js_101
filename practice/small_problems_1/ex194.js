//  - cut the string into substrings of size sz
//  - find the sum of cubes of each digit of all the substrings
//  - if the sum is divisble by 2, then reverse the substring
//  - else rotate the substring to the left by one position

function revrot(str, sz) {
  if (sz <= 0 || sz > str.length || str.length === 0) return '';

  let subStrArr = [];

  for (let idx = 0; idx < str.length; idx += sz) {
    let subStr = str.slice(idx, idx + sz);
    if (subStr.length === sz) subStrArr.push(subStr);
  }
  subStrArr = subStrArr.map(subStr => {
    return toReverse(subStr) ? subStr.split('').reverse().join('')
      : rotateString(subStr);
  });
  return subStrArr.join('');
}

function rotateString(subStr) {
  return subStr.slice(1) + subStr[0];
}

function toReverse(subStr) {
  let sum = subStr.split('').reduce((sum, num) => {
    sum += Math.pow((+num), 3);
    return sum;
  }, 0);

  return sum % 2 === 0;
}

console.log(revrot("73304991087281576455176044327690580265896", 8)); // "1994033775182780067155464327690480265895"
// console.log(revrot("1234", 0)); // ""
// console.log(revrot("", 0)); // ""
// console.log(revrot("1234", 5)); // ""
// console.log(revrot("733049910872815764", 5)); // "330479108928157"