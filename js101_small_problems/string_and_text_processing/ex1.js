// Approach 1:
let isUppercase =  str => {
  return str.split('').every(char => {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      return (char >= 'A' && char <= 'Z');
    } else {
      return true;
    }
  });
};

// // Approach 2:
// let isUppercase =  str => {
//   return str.split('').every(char => {
//     return !(char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
//   });
// };

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true