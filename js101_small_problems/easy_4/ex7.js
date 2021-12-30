// Approach 1:
let runningTotal = arr => {
  let total = 0;
  let idx = 0;
  let resultsArr = [];

  while (idx < arr.length) {
    total += arr[idx];
    resultsArr.push(total);
    idx += 1;
  }

  return resultsArr;
};

// Further Exploration:
// let runningTotal = arr => {
//   let total = 0;
//   return arr.map(num => {
//     total += num;
//     return total;
//   });
// };

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []