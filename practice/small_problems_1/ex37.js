let isPalindrome = str => str === str.split('').reverse().join('');

let isPalindromicNumber = function(num) {
  let numStr = String(num);
  return isPalindrome(numStr);
};


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true