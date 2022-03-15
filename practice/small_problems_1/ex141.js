//  find all the contiguous subsequences
//  find the sum of each subsequence

var maxSequence = function (arr) {
  if (arr.length === 0 || arr.every(num => num < 0)) return 0;
  else if (arr.every(num => num > 0)) {
    return arr.reduce((sum, num) => sum + num);
  }

  let conSubSequences = [];

  for (let outer = 0; outer < arr.length; outer += 1) {
    for (let inner = arr.length; inner > outer; inner -= 1) {
      conSubSequences.push(arr.slice(outer, inner));
    }
  }
  conSubSequences.sort((a, b) => {
    return b.reduce((sum, num) => sum + num) -
      a.reduce((sum, num) => sum + num);
  });
  return conSubSequences[0].reduce((sum, num) => sum + num);
};

console.log(maxSequence([])); // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6