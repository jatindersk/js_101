let staggeredCase = str => {
  let switchToUpper = true;
  return str.split('')
    .map(char => {
      if (!(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')) {
        return char;
      }

      if (switchToUpper) {
        switchToUpper = false;
        return char.toUpperCase();
      } else {
        switchToUpper = true;
        return char.toLowerCase();
      }
    }).join('');
};

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);