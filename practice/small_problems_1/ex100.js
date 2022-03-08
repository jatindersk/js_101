//  iterate over each character in the string
//  declare a toggle variable and set it to true
//  determine whether current charac is an alphabet
//  if toggle is true then uppercase the charac
//  if toggle is false then lowercase the charac

let staggeredCase = str => {
  let resultStr = '';
  let toggle = true;
  for (let idx = 0; idx < str.length; idx += 1) {
    if (isAlphabet(str[idx])) {
      if (toggle) {
        resultStr += str[idx].toUpperCase();
        toggle = false;
      } else {
        resultStr += str[idx].toLowerCase();
        toggle = true;
      }
    } else resultStr += str[idx];
  }
  return resultStr;
};

function isAlphabet(character) {
  character = character.toLowerCase();
  return character >= 'a' && character <= 'z';
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

// if (isAlphabet(str[idx]) && toggle) resultStr += str[idx].toUpperCase();
//     else if (isAlphabet(str[idx]) && !toggle) resultStr += str[idx].toLowerCase();