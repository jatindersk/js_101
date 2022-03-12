function expandedForm(num) {
  let expandedForm = ``;

  let numStr = String(num);
  for (let idx = 0; idx < numStr.length; idx += 1) {
    if (numStr[idx] === '0') continue;
    expandedForm = !!expandedForm.slice() ? expandedForm.slice() + ' + ' + appendZeros(numStr, idx) : appendZeros(numStr, idx);
  }
  return expandedForm;
}

function appendZeros(numStr, idx) {
  let expandedForm = `${numStr[idx]}`;
  let zeroCount = numStr.slice(idx + 1).length;
  while (zeroCount > 0) {
    expandedForm = expandedForm.slice() + '0';
    zeroCount -= 1;
  }
  return expandedForm;
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'

// do {
//   remainder = num % 10;
//   if (!expandedForm) expandedForm = expandedForm.slice() + ` + ${remainder}`;
//   num -= remainder;
// } while (remainder !== 0);

// expandedForm = String(num) + expandedForm.slice();
// return expandedForm;