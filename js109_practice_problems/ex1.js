// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

//  input: array, output: array
//  iterate over the input array
//  compare current number in iteration with all the numbers of input array
//  save the smaller number to an object
//  if the smaller number is already saved in the object then ignore it


let smallerNumbersThanCurrent = arr => {
  let obj = {};
  let result = [];

  arr.forEach(num => {
    arr.forEach(anotherNum => {
      if (num > anotherNum && !obj[anotherNum]) obj[anotherNum] = true;
    });
    result.push(Object.keys(obj).length);
    obj = {};
  });

  return result;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]