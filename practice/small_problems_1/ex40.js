//  input: string, output: string
//  algorithm:
//  - initiate a new empty string
//  - iterate through the string characters
//  - on each iteration, iterate through the characters
//  that follow the current character

function crunch(str) {
  let resultStr = '';
  for (let outer = 0; outer < str.length; outer += 1) {
    for (let inner = outer + 1; inner <= str.length; inner += 1) {
      // console.log(`string length:: ${str.length}`);
      // console.log(`outer:: ${str[outer]} outerIDX: ${outer}..inner:: ${str[inner]}..innerIDX: ${inner}`);
      if (str[outer] === str[inner]) continue;
      else {
        resultStr += str[outer];
        outer = inner;
      }
    }
  }
  return resultStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""