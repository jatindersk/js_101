let isPalindrome = str => {
  return str === str.split('').reverse().join('');
};

let alphaNumeric = str => {
  let pureText = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    if ((str[idx] >= 'a' && str[idx] <= 'z') || (str[idx] >= '0' && str[idx] <= '9')) {
      pureText += str[idx];
    }
  }
  return pureText;
};

let isRealPalindrome = str => isPalindrome(alphaNumeric(str.toLowerCase()));

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false