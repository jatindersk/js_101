// algorithm:
//  - declare and initialize a 'result' variable
//  to an empty string
//  - iterate over the string
//  - for odd indices lowercase the character
//  - uppercase the character for even indices

let staggeredCase = str => {
  let result = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (idx % 2 === 0) {
      result += str[idx].toUpperCase();
    } else {
      result += str[idx].toLowerCase();
    }
  }
  return result;
};

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"