// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

//  input: string, output: string
//  rules:
//  - ignore case
//  - if two char have same occurances then return the
//    char that appears first in the input string

//  algo:
//  - declare a result obj to store the occurances of each
//    character as a property
//  - iterate over each charcater in the string

let leastCommonChar = str => {
  let result = {};

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx].toLowerCase();
    result[char] = result[char] || 0;
    result[char] += 1;
  }

  result = Object.entries(result);
  result.sort((a, b) => a[1] - b[1]);

  return result[0][0];
};

// Examples:
console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
  "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".