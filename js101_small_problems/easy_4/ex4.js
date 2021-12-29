// // Approach 1:
// let isPalindrome = str => {
//   let middlePoint = Math.floor(str.length / 2);
//   for (let idx = 0; idx < middlePoint; idx += 1) {
//     if (str[idx] !== str[(str.length - 1) - idx]) {
//       return false;
//     }
//   }
//   return true;
// };

// LS Approach:
let isPalindrome = str => {
  return str === str.split('').reverse().join('');
};

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true