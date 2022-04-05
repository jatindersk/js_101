// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

//  convert the string to lowercase
//  iterate through the string characters
//  save the character to an object as property and
//    keep incrementing the count

let leastCommonChar = str => {
  str = str.toLowerCase();
  let obj = {};
  let result;

  str.split('').forEach(char => {
    obj[char] = obj[char] || 0;
    obj[char] += 1;
  });

  result = Object.entries(obj);
  result.sort((a, b) => a[1] - b[1]);

  return result[0][0];
};

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".