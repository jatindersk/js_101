var solution = function (firstArray, secondArray) {
  let absouluteVal = secondArray.reduce((acc, el, idx) => {
    acc.push(el - firstArray[idx]);
    return acc;
  }, []).
    map(val => val * val);

  return absouluteVal.reduce((sum, val) => sum + val) / absouluteVal.length;
};

console.log(solution([1, 2, 3], [4, 5, 6])); // 9
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); // 16.5
console.log(solution([0, -1], [-1, 0])); // 1