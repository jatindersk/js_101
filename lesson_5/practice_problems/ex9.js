let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedSubArrays = arr.map(subArr => {
  return (typeof subArr[0] === 'number') ? subArr.slice().sort((a, b) => a - b) : subArr.slice().sort();
});
console.log(sortedSubArrays);
console.log(arr);