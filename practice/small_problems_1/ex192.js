let alphabetized = str => {
  let letterChars = str.split('').filter(char => char.toLowerCase() !== char.toUpperCase());

  while (true) {
    let swap = false;
    for (let idx = 0; idx < letterChars.length - 1; idx += 1) {
      if (letterChars[idx].toUpperCase() <= letterChars[idx + 1].toUpperCase()) continue;
      [letterChars[idx], letterChars[idx + 1]] =
        [letterChars[idx + 1], letterChars[idx]];
      swap = true;
    }
    if (!swap) break;
  }

  return letterChars.join('');
};

console.log(alphabetized("The Holy Bible")); // "BbeehHilloTy"

// function alphabetized(s) {
// //   let onlyLetter = s.split('').filter(char => char.toLowerCase() !== char.toUpperCase()).join('');
// //   let arrChar = onlyLetter.split('');
// //   console.log(`arrChar ${arrChar}`);
// //   while (true) {
// //     let swapped = false;
// //     for (let idx = 1; idx < arrChar.length; idx++) {
// //       if (arrChar[idx - 1].toLowerCase() <= arrChar[idx].toLowerCase()) continue;
// //       [arrChar[idx - 1], arrChar[idx]] = [arrChar[idx], arrChar[idx - 1]];
// //       console.log(`arrChar ${arrChar}`);
// //       swapped = true;
// //     }
// //     if (!swapped) break;
// //   }
// //   return arrChar.join('');
// // }

// function alphabetized(string) {
//   string = string.replace(/[^a-z]/gi, "");
//   return string.split("").sort((a, b) => {
//     if (a.toLowerCase() > b.toLowerCase()) return 1;
//     else if (a.toLowerCase() < b.toLowerCase()) return -1;
//     else return 0;
//   }).join("");
// }