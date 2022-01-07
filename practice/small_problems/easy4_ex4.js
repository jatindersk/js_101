// algorithm:
//  - find the middle index of the string
//  - compare the first half to the second half by slicing
//  - reverse the second half before comparing it with the first half

let isPalindrome = str => {
  let midIndex = Math.floor(str.length / 2);
  let firstHalf;
  let secondHalf;

  if (str.length % 2 === 0) {
    firstHalf = str.slice(0, midIndex);
    secondHalf = str.slice(midIndex);
  } else {
    firstHalf = str.slice(0, 2);
    secondHalf = str.slice(midIndex + 1);
  }
  return firstHalf === secondHalf.split('').reverse().join('');
};

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true