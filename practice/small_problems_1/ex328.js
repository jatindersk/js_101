// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

//  input: array, output: number
//  algo:
//  - use guard clause to handle invalid argument
//  - extract the subarrays from the input array
//  - calculate the sum of each subarray
//  - return the minimum sum

function minimumSum(arr) {
  if (arr.length < 5) return null;

  let subArr = getSubarrays(arr);

  subArr = subArr.map(arr => {
    return arr.reduce((sum, num) => sum + num);
  });

  return Math.min(...subArr);
}

function getSubarrays(arr) {
  let result = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    let subArr = arr.slice(idx, idx + 5);
    if (subArr.length === 5) result.push(subArr);
  }
  return result;
}

// Examples:
console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".