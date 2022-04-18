function isUppercase(str) {
  let result = str.split('').every(char => char === char.toUpperCase());
  console.log(result);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true