//  input: string, output: string
//  rules:
//  - capital letters are followed by lowercase counterparts
//  - input string contain only letters
//  - uppercase letters are unique

//  algo:
//  - sort the input string ignoring their case
//  - make sure that lowercase letters are preceeded
//    by their uppercase counterparts
//    - lowercase the sorted string
//    - iterate over the sorted string
//    - declare a variable result = ''
//    - declare a variable temp = ''
//    - in each iteration check whether the current character
//      is same as the character saved in temp (including the case)
//    - if it is not same then uppercase the current character before
//      appending it to result string and also save the current character in
//      temp variable
//    - if it is same then append the current character as it is to result str

function findChildren(dancingBrigade) {
  let result = '';
  let temp = '';

  dancingBrigade = dancingBrigade.split('').sort(sortString).join('');
  dancingBrigade = dancingBrigade.toLowerCase();

  for (let idx = 0; idx < dancingBrigade.length; idx += 1) {
    let currentChar = dancingBrigade[idx];

    if (currentChar !== temp) {
      temp = currentChar;
      result += currentChar.toUpperCase();
    } else result += currentChar;
  }
  return result;
}

function sortString(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
}

console.log(findChildren("beeeEBb")); // "BbbEeee"
console.log(findChildren("uwwWUueEe")); // "EeeUuuWww"