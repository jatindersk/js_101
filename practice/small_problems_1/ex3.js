// algorithm:
//  - even indices letters are uppercased
//  - odd indices letters are lowercased

let staggeredCase = str => {
  let newStr = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (idx % 2 === 0) newStr += str[idx].toUpperCase();
    else newStr += str[idx].toLowerCase();
  }
  return newStr;
};

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"