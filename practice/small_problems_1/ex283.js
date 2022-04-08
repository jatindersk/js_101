//  input: number, output: string
//  algo:
//  - convert the num into a num string
//  - iterate ober the numstring
//  - extract the first number in each iteration and
//    append the number of zeros equal to the length of the remaining numString

function expandedForm(num) {
  let numStr = String(num);
  let result = '';

  for (let idx = 0; idx < numStr.length; idx += 1) {
    if (numStr[idx] === '0') continue;
    result += numStr[idx] + '0'.repeat(numStr.slice(idx + 1).length) + ' + ';
  }
  return result.slice(0, result.length - 3);
}

console.log(expandedForm(12)); // '10 + 2'
console.log(expandedForm(42)); // '40 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'