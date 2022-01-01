let staggeredCase = str => {
  let flipper = 1;
  return str
    .split('')
    .map(char => {
      if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
        return char;
      }

      if (flipper === 1) {
        flipper -= 1;
        return char.toUpperCase();
      } else {
        flipper += 1;
        return char.toLowerCase();
      }
    }).join('');
};

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

// // Further Exploration:
// let staggeredCase = (str, flipper = 0) => {
//   console.log(flipper);
//   return str
//     .split('')
//     .map((char, idx) => {
//       if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
//         return char;
//       }

//       if (flipper || idx % 2 === 0) {
//         flipper -= 1;
//         return char.toUpperCase();
//       } else {
//         flipper += 1;
//         return char.toLowerCase();
//       }
//     }).join('');
// };

// console.log(staggeredCase('I Love Launch School!', 1));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"