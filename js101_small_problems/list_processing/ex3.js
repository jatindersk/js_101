let multiplyAllPairs = (arr1, arr2) => {
  const result = [];

  arr1.forEach(num => {
    arr2.forEach(val => {
      result.push(num * val);
    });
  });

  return sortingFunction(result);
};

function sortingFunction(arr) {
  return arr.sort(ascendingOrder);
}

function ascendingOrder(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]