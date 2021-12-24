let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// Approach 1:
// Object.values(obj).forEach(arr => {
//   let vowels = [ 'a', 'e', 'i', 'o', 'u' ];
//   arr.forEach(str => {
//     for (let letter of str) {
//       if (vowels.includes(letter)) {
//         console.log(letter); // e, u, i, o, o, u, e, o, e, e, a, o
//       }
//     }
//   });
// });

// Approach 2:
Object.values(obj).forEach(arr => {
  let vowels = [ 'a', 'e', 'i', 'o', 'u' ];
  arr.forEach(str => {
    let arrOfLetters = str.split('');
    arrOfLetters.forEach(letter => {
      if (vowels.includes(letter)) {
        console.log(letter);
      }
    });
  });
});