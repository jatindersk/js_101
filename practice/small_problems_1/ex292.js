// //  input: string, output: string
// //  rules:
// //  - case insensitive
// //  - arranged alphabetically
// //  - remove whitespace and punctuations
// //  - input is always letters

// //  algo:
// //  - filter out the non alphabet characters from the string
// //  - sort the charcaters of the string and return it

// function alphabetized(str) {
//   let lettersOnly = str.split('').filter(char => char.toLowerCase() !== char.toUpperCase());

//   return lettersOnly.sort(sortLetters).join('');
// }

// function sortLetters(a, b) {
//   a = a.toLowerCase();
//   b = b.toLowerCase();

//   if (a > b) return 1;
//   else if (a < b) return -1;
//   else return 0;
// }

//  input: string, output: string

//  rules:
//  - case insensitive
//  - arranged alphabetically
//  - remove whitespace and punctuations
//  - input is always letters

//  algo:
//  - use bubble sort

let alphabetized = str => {
  let lettersOnly = str.split('').filter(char => char.toLowerCase() !== char.toUpperCase());
  let currentChar;
  let nextChar;
  let swapped;

  while (true) {
    swapped = false;
    for (let idx = 0; idx < lettersOnly.length - 1; idx += 1) {
      currentChar = lettersOnly[idx];
      nextChar = lettersOnly[idx + 1];

      if (currentChar.toLowerCase() > nextChar.toLowerCase()) {
        [lettersOnly[idx], lettersOnly[idx + 1]] =
          [lettersOnly[idx + 1], lettersOnly[idx]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return lettersOnly.join('');
};

console.log(alphabetized('The Holy Bible') === 'BbeehHilloTy'); // 'BbeehHilloTy'