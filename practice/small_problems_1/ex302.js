//  input: string, output: string
//  rules:
//  - if the char appears once replace it with '('
//  - if the char appears twice then replace it with ')'
//  - ignore the case of the characters

//  algo:
//  - declare a occurannces variable = {}
//  - iterate over the string characters
//  - save the characters as keys along with their
//    occurances in the occurances object

//  - declare a result variable = ''
//  - iterate over the input string once again
//  - if the value of current char in occurances obj
//    is greater than 1 then result += ')'
//  - else result += '('
//  - return result

function duplicateEncode(word) {
  word = word.toLowerCase();
  let occurances = {};
  let result = '';

  word.split('').forEach(char => {
    occurances[char] = occurances[char] || 0;
    occurances[char] += 1;
  });

  word.split('').forEach(char => {
    if (occurances[char] > 1) result += ')';
    else result += '(';
  });

  return result;
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())","should ignore case"
console.log(duplicateEncode("(( @")); // "))(("