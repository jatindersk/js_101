//  - function computes the sum of the digits
//  - it keeps calling itself until the sum has only a single digit

function digital_root(num) {
  let sum;
  if (String(num).length === 1) return (+num);

  sum = String(num).split('').reduce((sum, num) => (+sum) + (+num));
  while (String(sum).length > 1) {
    sum = digital_root(sum);
  }

  return sum;
}

console.log(digital_root(16)); // 7
console.log(digital_root(456)); // 6