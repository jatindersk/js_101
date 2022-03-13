// Problem:
// Complete the function scramble(str1, str2) that returns true if a portion of str1
// characters can be rearranged to match str2, otherwise returns false.

function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}

// function scramble(str1, str2) {
//   let str2Arr = str2.split('');

//   return str2Arr.map((char) => {
//     if (str1.includes(char)) {
//       let sliceIdx = str1.indexOf(char);
//       str1 = str1.slice(0, sliceIdx) + str1.slice(sliceIdx + 1);
//       return true;
//     } else return false;
//   }).every(el => el === true);
// }

// function scramble(str1, str2) {
//   return str2.split('').every(char => {
//     let result = str1.includes(char);
//           let sliceIdx = str1.indexOf(char);
//       str1 = str1.slice(0, sliceIdx) + str1.slice(sliceIdx + 1);
//     return result;
//   });
// }

console.log(scramble('rkqodlw', 'world')); // True
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // True
console.log(scramble('katas', 'steak')); // False

console.log(scramble('scriptjavx', 'javascript')); // False
console.log(scramble('aabbcamaomsccdd', 'commas')); // true
// console.log(scramble('katas', 'steak')); // False


// function scramble(str1, str2) {
//   let str2Arr = str2.split('');

//   for (let idx = 0; idx < str2Arr.length; idx += 1) {
//     if (str1.includes(str2Arr[idx])) {
//       let sliceIdx = str1.indexOf(str2Arr[idx]);
//       str1 = str1.slice(0, sliceIdx) + str1.slice(sliceIdx + 1);
//     } else return false;
//   }
//   return true;
// }