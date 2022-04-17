// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

//  input: array, output: array
//  algo:
//  - filter out the duplicate numbers in the input array
//  - declare a result object which will store the count for each number
//  - iterate over the numbers of the filtered array
//  - if current number is greater than current number increase it's value
//    in the result object by 1
//  - replace the elements in input array by their corresponding values in
//    the result object

let smallerNumbersThanCurrent = arr => {
  let filteredArr = removeDuplicates(arr);
  let result = {};

  filteredArr.forEach(el => {
    filteredArr.forEach(num => {
      if (el > num) {
        result[el] = result[el] || 0;
        result[el] += 1;
      }
    });
  });

  return arr.map(num => {
    if (result[num]) return result[num];
    else return 0;
  });
};

function removeDuplicates(arr) {
  let result = [];

  arr.forEach(el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
}


// Examples:
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]