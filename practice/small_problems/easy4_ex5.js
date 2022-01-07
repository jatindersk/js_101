// algorithm:
//  - remove all non-alphanumeric characters from the string
//  - convert all the alphabetic characters to lowercase before
//    passing them to function isPalindrome()

let isRealPalindrome = str => {
  str = str.toLowerCase();
  let cleanStr = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    //console.log(`char is ${char}`);
    if (isAlphabet(char) || isNumeric(char)) {
      cleanStr += char;
    }
    //console.log(`cleanStr is ${cleanStr}`);
  }
  return isPalindrome(cleanStr);
};

function isPalindrome(cleanStr) {
  return (cleanStr === cleanStr.split('').reverse().join(''));
}

function isAlphabet(char) {
  return (char >= 'a' && char <= 'z');
}

function isNumeric(char) {
  return (char >= '0' && char <= '9');
}


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false