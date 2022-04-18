let staggeredCase = str => {
  let result = str.split('')
    .map((char, idx) => {
      if ((idx + 1) % 2 === 1) return char.toUpperCase();
      else return char.toLowerCase();
    }).join('');

  console.log(result);
};

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"