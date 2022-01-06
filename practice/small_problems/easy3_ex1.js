// input: string with consecutive duplicate characters
// output: original string w/o consecutive duplicate characters
// Algorithm:
//  - compare the first character wuth next character in the word
//    - if the characters are same then remove the character

let crunch = str => {
  let result = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] !== str[idx + 1]) {
      result += str[idx];
    }
  }
  console.log(result);
};

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""