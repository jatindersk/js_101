function subSequences(arr) {
  let subSequenceArr = [];
  for (let idx = 1; idx <= arr.length; idx += 1) {
    subSequenceArr.push(...arr.slice(0, idx));
  }
  return subSequenceArr;
}

function calculateSum(arr) {
  return arr.reduce((acc, el) => acc + el, 0);                 // (3) + (3 + 5) + (3 + 5 + 2) --> 21
}

let sumOfSums = arr => {
  return calculateSum(subSequences(arr));
};

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35