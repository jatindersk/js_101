let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

let sum = arr => arr.reduce((acc, num) => acc + num, 0);

scores.sort((arr1, arr2) => {
  let sum1 = sum(arr1);
  let sum2 = sum(arr2);
  return sum1 - sum2;
});

console.log(scores);