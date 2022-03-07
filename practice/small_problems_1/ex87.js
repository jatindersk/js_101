//  split the string in characters
//  declare a count variable and initialize it to 0
//  iterate through the split string
//  if current charac is ( then count += 1
//  if current charac is ) then count -= 1
//  after iteration has finished: if the value of count is
//  not zero then return false, else return true

function isBalanced(str) {
  let count = 0;
  let charArr = str.split('');

  for (let idx = 0; idx < charArr.length; idx += 1) {
    if (charArr[idx] === '(') count += 1;
    else if (charArr[idx] === ')') count -= 1;
    if (count < 0) return false;
  }
  return count === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);