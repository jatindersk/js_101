let union = (arr1, arr2) => {
  let finalArray = [];

  return iterateFunction(arr2, iterateFunction(arr1, finalArray));

};

function iterateFunction(arr, finalArray) {
  arr.forEach(val => {
    if (!(finalArray.includes(val))) {
      finalArray.push(val);
    }
  });
  return finalArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 3, 5, 5], [3, 6, 9, 9, 8]));    // [1, 3, 5, 6, 9, 8]