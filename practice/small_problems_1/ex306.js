//  input: string and a number, output: string

//  algo:
//  - handle the invalid arguments

//  Obtain substrings:
//  - declare a variable subStr = []
//  - push the substrings of required length
//    into the subStr array
//  - to determine the appropriate length, we
//    need to check each substr's length against the second argument

//  Reverse of rotate:
//  - iterate over the substrings
//  - find the sum of cubes of digits of each substring
//  - if sum % 2 === 0, then reverse and replace the current substring with it
//  - else rotate the substring one position to the left and replace the current
//    substring
//  - concatenate the transformed substrings and return the result


function revrot(str, sz) {
  if (sz <= 0 || sz > str.length || str === '') return '';

  let subStr = [];
  getSubstrings(str, sz, subStr);

  subStr = subStr.map(str => {
    if (findSum(str) % 2 === 0) return reversedStr(str);
    else return rotateStr(str);
  });

  return subStr.join('');
}

function reversedStr(str) {
  return str.split('').reverse().join('');
}

function rotateStr(str) {
  return str.slice(1) + str[0];
}

function findSum(str) {
  return str.split('').reduce((sum, num) => {
    sum += Math.pow((+num), 3);
    return sum;
  }, 0);
}

function getSubstrings(str, sz, subStr) {
  let sliced;
  for (let idx = 0; idx < str.length; idx += sz) {
    sliced = str.slice(idx, idx + sz);
    if (sliced.length === sz) subStr.push(sliced);
  }
}

console.log(revrot("66443875", 4)); // --> "44668753"
console.log(revrot("", 8)); // --> "")
console.log(revrot("123456779", 0)); // --> ""

console.log(revrot("563000655734469485", 4)); // --> "0365065073456944"
console.log(revrot("123456987654", 6)); // --> "234561876549"
console.log(revrot("123456987653", 6)); // --> "234561356789"
console.log(revrot("66443875", 8)); // --> "64438756"
console.log(revrot("664438769", 8)); // --> "67834466"
console.log(revrot("123456779", 8)); // --> "23456771"
console.log(revrot("123456779", 8)); // --> "23456771"