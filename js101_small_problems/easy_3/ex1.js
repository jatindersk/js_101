let crunch = str => {
  let arr = [str[0]];
  let strArr = str.split('');

  for (let idx = 1; idx < strArr.length; idx += 1) {
    if (strArr[idx] !== strArr[idx - 1]) {
      arr.push(strArr[idx]);
    }
  }

  return arr.join('');
};

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""