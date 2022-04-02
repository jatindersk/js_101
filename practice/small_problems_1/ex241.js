let isBalanced = str => {
  str = str.split('');
  let counter = 0;
  let currentChar;

  for (let idx = 0; idx < str.length; idx += 1) {
    currentChar = str[idx];
    if (currentChar === '(') counter += 1;
    else if (currentChar === ')') counter -= 1;

    if (counter < 0) return false;
  }

  return counter === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);