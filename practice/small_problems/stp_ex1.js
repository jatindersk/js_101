// algorithm:
//  - ignore the cases that are non alphabetic
//  - compare the letter to itself's version of
//  uppercased letter
//  - if the above comparison evaluates as false
//  at any given point in iteration, return false

let isUppercase = str => {
  let charArr = str.split('');

  for (let idx = 0; idx < charArr.length; idx += 1) {
    if (isAlphabet(charArr[idx].toLowerCase()) && !checkUpper(charArr[idx])) {
      return false;
    }
  }
  return true;
};

function checkUpper(char) {
  return char === char.toUpperCase();
}

function isAlphabet(char) {
  return char >= 'a' && char <= 'z';
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true