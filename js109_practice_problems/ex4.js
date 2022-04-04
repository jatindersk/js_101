// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

//  the two numbers having the least difference
//  iterate over the array
//  find the difference of the number in current iteration with
//    every number except itself
//  store the difference value and current combination of numbers to
//    a result array
//  sort this result array in ascending order of differences
//  return the first combination of numbers

let closestNumbers = arr => {
  let result = [];
  let first;
  let second;

  for (let idx = 0; idx < arr.length; idx += 1) {
    first = arr[idx];
    for (let end = idx + 1; end < arr.length; end += 1) {
      second = arr[end];
      result.push([Math.abs(first - second), first, second]);
    }
  }
  result.sort((a, b) => a[0] - b[0]);
  return result[0].slice(1);
};

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]