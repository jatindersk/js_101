//  find all substrings
//  filter the vowel substrings
//  replace the length of each of each substring
//    with it's length
//  return the maximum length

// function solve(str) {
//   let vowelSubstr = [];
//   for (let start = 0; start < str.length; start += 1) {
//     for (let end = start + 1; end <= str.length; end += 1) {
//       let subStr = str.slice(start, end);
//       if (subStr.split('').every(letter => 'aeiou'.includes(letter))) {
//         vowelSubstr.push(subStr.length);
//       }
//     }
//   }

//   return Math.max(...vowelSubstr);
//   // console.log(vowelSubstr);
//   // let lengths = vowelSubstr.filter(str => {
//   //   return str.split('').every(letter => 'aeiou'.includes(letter));
//   // }).map(str => str.length);

//   // let lengths = vowelSubstr.map(str => {
//   //   if (str.split('').every(letter => 'aeiou'.includes(letter))) {
//   //     return str.length;
//   //   } else return '';
//   // });
// //  return Math.max(...lengths);
// }

console.log(solve("suoidea")); // 3;
console.log(solve("codewarriors")); // 2;
console.log(solve("ultrarevolutionariees")); // 3;
console.log(solve("strengthlessnesses")); // 1;
console.log(solve("cuboideonavicuare")); // 2;
console.log(solve("chrononhotonthuooaos")); // 5;
console.log(solve("iiihoovaeaaaoougjyaw")); // 8;