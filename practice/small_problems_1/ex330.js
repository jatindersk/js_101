// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

//  input: array, output: array
//  algo:
//  - iterate over the elements of input array
//  - declare a result variable = [] which will be a 2d array
//  - 1st element of 2d array will have the number combo
//  - 2nd element of 2d array will have the difference value of the
//    combo numbers

//  - filter out the combo values with difference values as 0
//  - sort the combo values in ascending order of their diff values
//  - return the 1st combo in the sorted array

function closestNumbers(arr) {
  let result = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    for (let inner = 0; inner < arr.length; inner += 1) {
      if (arr[idx] === arr[inner]) continue;

      result.push([[arr[idx], arr[inner]], Math.abs(arr[idx] - arr[inner])]);
    }
  }

  result.sort((a, b) => a[1] - b[1]);
  return result[0][0];
}

// Examples:
console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]