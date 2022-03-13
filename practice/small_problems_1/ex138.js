function validParentheses(parens) {
  let charArr = parens.split('');
  let counter = 0;

  for (let idx = 0; idx < charArr.length; idx += 1) {
    if (charArr[0] === ')' || counter < 0) return false;

    if (charArr[idx] === '(') counter += 1;
    else if  (charArr[idx] === ')') counter -= 1;
  }

  return counter === 0;
}

console.log(validParentheses( "(" )); // false
console.log(validParentheses( ")" )); // false
console.log(validParentheses( "" )); // true
console.log(validParentheses( "()" )); // true
console.log(validParentheses( "())" )); // false
console.log(validParentheses( ")()()()(" )); // false