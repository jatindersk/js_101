//  algorithm:
//  - remove non-alphanumeric characters from the input string
//  - call the palindrome function with above string as argument

let isPalindrome = str => str === str.split('').reverse().join('');

let isRealPalindrome = str => {
  let moddedString = str.split('').filter(char => {
    return isAlphanumeric(char);
  }).join('');
  return isPalindrome(moddedString.toLowerCase());
};

function isAlphanumeric(char) {
  char = char.toLowerCase();
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return ((char >= 'a' && char <= 'z') || digits.includes(char));
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false