function halvsies(arr) {
  let midPoint = Math.ceil(arr.length / 2);
  let result = [];

  result.push(arr.slice(0, midPoint), arr.slice(midPoint));
  return result;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]