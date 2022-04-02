let multiplyAllPairs = (arr1, arr2) => {

  return arr1
    .reduce((acc, num) => {
      acc = acc.concat([...arr2].map(el => el * num));
      return acc;
    }, [])
    .sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]