let halvsies = arr => {
  let midIdx = Math.floor(arr.length / 2);
  let firstHalf;
  let secondHalf;
  let result = [];

  if (arr.length % 2 === 0) {
    firstHalf = arr.slice(0, midIdx);
    secondHalf = arr.slice(midIdx);
  } else {
    firstHalf = arr.slice(0, midIdx + 1);
    secondHalf = arr.slice(midIdx + 1);
  }
  result.push(firstHalf, secondHalf);
  return result;
};

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]