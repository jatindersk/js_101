let isBalanced = str => {
  let parenth = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === '(') {
      parenth += 1;
    } else if (str[idx] === ')') {
      parenth -= 1;
    }
    if (parenth < 0) return false;
  }
  return parenth === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);