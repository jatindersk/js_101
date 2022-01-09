// algorithm:
//  - split the string into an array of individual characters
//  - iterate through the array
//  - check whether the character is an alphabet
//  - if it is then flip its case
//  - keep track of the flip with the help of a 'flipUp' variable
//  - 'flipUp' variable will be assigned to true after each Uppercase switch
//  - it will then be toggled to false after each Lowercase switch
//  - return the flipped character
//  - if the character isn't an alphabet then return it as it is

let staggeredCase = str => {
  let flipUp = true;
  return str
    .split('')
    .map(char => {
      if (isAlphabet(char)) {
        if (flipUp) {
          flipUp = !flipUp;
          return char.toUpperCase();
        } else {
          flipUp = !flipUp;
          return char.toLowerCase();
        }
      }
      return char;
    }).join('');
};

function isAlphabet(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);