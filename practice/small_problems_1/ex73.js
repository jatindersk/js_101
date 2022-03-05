let isPalindrome = str => str === str.split('').reverse().join('');

let isRealPalindrome = str => {
  let onlyAlphanumeric = removeNonAlphanumeric(str);
  return isPalindrome(onlyAlphanumeric.toLowerCase());
};

function removeNonAlphanumeric(str) {
  return str.split('').filter(char => {
    char = char.toLowerCase();
    return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
  }).join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false