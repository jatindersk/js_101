let sumOfSums = arr => {
  let subArr = [];
  for (let idx = 1; idx <= arr.length; idx += 1) {
    subArr.push(arr.slice(0, idx));
  }
  let total = 0;
  subArr.forEach(arr => {
    total += arr.reduce(sum, 0);
  });
  return total;
};

function sum(total, num) {
  total += num;
  return total;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35