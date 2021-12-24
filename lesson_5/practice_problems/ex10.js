let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let sortedSubArr = arr.map(subArr => (typeof subArr[0] === 'number') ? subArr.slice().sort((a, b) => b - a) : subArr.slice().sort());

let sortedSubArr = arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});
console.log(sortedSubArr);
console.log(arr);