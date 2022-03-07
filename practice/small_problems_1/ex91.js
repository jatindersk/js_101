//  input: array
//  output: number
//  find the substrings
//  we will have an array of nested arrays (substring)


let sumOfSums = arr => {
  let sequences = subSequences(arr);
  return sequences.reduce((acc, subArr) => acc.concat(...subArr)).reduce(sum);
};

function sum(total, num) {
  return total + num;
}

function subSequences(arr) {
  let result = [];
  for (let endIdx = 1; endIdx <= arr.length; endIdx += 1) {
    result.push(arr.slice(0, endIdx));
  }
  return result;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35