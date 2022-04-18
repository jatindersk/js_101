let staggeredCase = str => {
  let flipped = true;

  let result = str.split('')
    .map(char => {
      if (isAlphabet(char) && flipped === true) {
        flipped = false;
        return char.toUpperCase();
      } else if (isAlphabet(char) && flipped === false) {
        flipped = true;
        return char.toLowerCase();
      } else return char;
    }).join('');

  return result;
};

function isAlphabet(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);