function expandedForm(num) {
  num = String(num);
  let result = '';

  for (let idx = 0; idx < num.length; idx += 1) {
    if (num[idx] !== '0') {
      result += num[idx];
      result = result + '0'.repeat(num.slice(idx + 1).length) + ' + ';
    }
  }
  return result.slice(0, result.length - 3);
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'

// let result = '';
// while (true) {
//   result = ' + ' + (num % 10) + result;
//   num -= num % 10;
//   console.log(`num is:: ${num}`);
//   // console.log(`${!String(num).slice(1).includes('123456789')}...${String(num).length === 1}`);
//   if (String(num).length === 1) break;
// }

// return num + result;
// }

// function breakCondition(num) {
// return String(num).slice(1).split('').
//   some(char => '123456789'.includes(char));
// }