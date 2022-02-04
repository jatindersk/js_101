//  input: string, output: string
//  algorithm:
//  - convert the string to an array
//  - iterate through the array of words
//  - if the current word's length is >= 5 then select that
//  word and reverse it
//  - otherwise just return the word as it is

let reverseWords = str => {
  return str.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  }).join(' ');
};

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"