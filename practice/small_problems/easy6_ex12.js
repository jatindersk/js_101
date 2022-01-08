// algorithm:
//  - iterate through the string
//  - define a 'result' variable which will keep track of the
//  number of '(' or ')' characters in the string
//  - initialize 'result' to 0
//  - if character is '(' then increment 'result' by 1
//  - if character is ')' then decrement 'result' by 1
//  - check the value of 'result' after each itertion
//  - if 'result' is less than 0, return false
//  - if the 'result' is not 0 after iteration has finished,
//  then return false, else if it's 0 then return true

let isBalanced = str => {
  let result = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === '(') {
      result += 1;
    } else if (str[idx] === ')') {
      result -= 1;
    }
    // console.log(`${result},...char ${str[idx]}`);
    if (result < 0) return false;
  }
  return result === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);