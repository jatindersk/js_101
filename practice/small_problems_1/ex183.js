//  - iterate over the characters
//  - store the occurances value of each character in an object
//  - create a result variable = ''
//  - iterate over the string again
//    - if the current character has more than 1 occurance then
//      add character ')' to the result string
//    - otherwise add charcater '(' to the result string

function duplicateEncode(word) {
  word = word.toLowerCase();
  let result = '';
  let obj = {};

  word.split('').forEach(char => {
    obj[char] = obj[char] || 0;
    obj[char] += 1;
  });

  word.split('').forEach(char => {
    if (obj[char] > 1) result += ')';
    else result += '(';
  });

  return result;
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())","should ignore case"
console.log(duplicateEncode("(( @")); // "))(("