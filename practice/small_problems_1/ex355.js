function sumOfSums(arr) {
  let subSequences = arr.reduce((acc, _, idx) => {
    acc.push(arr.slice(0, (idx + 1)));
    return acc;
  }, []);

  subSequences = subSequences.flat(1);
  return subSequences.reduce((sum, num) => sum + num);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35