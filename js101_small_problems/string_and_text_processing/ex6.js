// let staggeredCase = str => {
//   let result = '';
//   for (let idx = 0; idx < str.length; idx += 1) {
//     //console.log(`${idx} --- ${result}`);
//     if (!((str[idx] >= 'a' && str[idx] <= 'z') || (str[idx] >= 'A' && str[idx] <= 'Z'))
//       && str[idx] !== ' ') {
//       result += str[idx]; // Straneg behaviour noted with ! and numeric characters
//     }

//     if (idx % 2 === 0) {
//       result += str[idx].toUpperCase();
//     } else {
//       result += str[idx].toLowerCase();
//     }
//   }
//   return result;
// };

let staggeredCase = str => {
  return str
    .split('')
    .map((char, idx) => {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    }).join('');
};

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"