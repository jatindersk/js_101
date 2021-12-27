// Approach 1:
// let oddities = arr => {
//   let oddElements = [];
//   arr.forEach((el, idx) => {
//     if (Math.round((idx += 1) % 2) === 1) {
//       oddElements.push(el);
//     }
//   });
//   return oddElements;
// };

// Approach 2:
// let oddities = arr => {
//   let oddPositionElements = [];
//   for (let idx = 0; idx < arr.length; idx += 2) {
//     oddPositionElements.push(arr[idx]);
//   }
//   return oddPositionElements;
// };

// Further Exploration -> Approach 1:
// let oddities = arr => {
//   let oddElements = [];
//   arr.forEach((el, idx) => {
//     if (Math.round((idx % 2)) === 1) {
//       oddElements.push(el);
//     }
//   });
//   return oddElements;
// };

// Further Exploration -> Approach 2:
let oddities = arr => {
  let oddElements = Object.keys(arr).filter(el => Math.round(el % 2) === 1)
    .map(idx => arr[idx]);
  return oddElements;
};

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []