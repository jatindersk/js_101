let staggeredCase = str => {
  let strArr = str.split('');
  let flipped = true;

  return strArr.map(char => {
    if (isAlphabet(char) && flipped === true) {
      flipped = false;
      return char.toUpperCase();
    } else if (isAlphabet(char) && flipped === false) {
      flipped = true;
      return char.toLowerCase();
    }
    return char;
  }).join('');
};

function isAlphabet(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);