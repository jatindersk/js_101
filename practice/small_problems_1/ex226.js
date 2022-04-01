let isPalindrome = str => {
  console.log(str === str.split('').reverse().join(''));
};

function isRealPalindrome(str) {
  str = str.toLowerCase();
  str = str.split('').filter(char => {
    return char.toLowerCase() !== char.toUpperCase();
  }).join('');

  isPalindrome(str);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false