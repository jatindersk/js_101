//  input: array, output: nested array
//  algorithm:
//  - calculate the mid point of the array
//  - initiate a new empty array
//  - slice the first half of input array and push it to the above
//  empty array
//  - slice the second hald of input array and push it to the empty
//  array

let halvsies = arr => {
  let midPoint = Math.round(arr.length / 2);
  let resultArr = [];

  let firstHalf = arr.slice(0, midPoint);
  let secondHalf = arr.slice(midPoint);
  resultArr.push(firstHalf, secondHalf);
  return resultArr;
};

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]