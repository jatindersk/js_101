//  input: number (> one digit), output: number (single digit)

//  algo:
//  - write a function which calculates the sum of digits of the
//    number passed in as an argument
//  - the function then checks whether the sum calculated has more
//    than one digit
//  - if yes, then it keeps calling itself and reassigning the sum
//    calculated to variable num
//  - when the sum calculated has exactly one digit the function returns
//    the num (sum calculated)

function digital_root(num) {
  let numStr = String(num);
  num = numStr.split('').reduce((sum, num) => (+sum) + (+num));

  while (String(num).length > 1) {
    num = digital_root(num);
  }
  return +num;
}

console.log(digital_root(16)); // 7
console.log(digital_root(456)); // 6

// function digital_root(num) {
//   let numStr = String(num);
//   num = numStr.split('').reduce((sum, num) => (+sum) + (+num));

//   while (String(num).length > 1) {
//     num = digital_root((+num));
//   }

//   return +num;
// }