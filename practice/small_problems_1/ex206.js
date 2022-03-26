function isIntArray(arr) {
  if (!arr) return false;
  if (arr.length === 0) return true;

  return arr.every(char => Number.isInteger(char));
}

console.log(isIntArray([])); // true, "Input: []"
console.log(isIntArray([1, 2, 3, 4])); // true, "Input: [1, 2, 3, 4]"
console.log(isIntArray([1, 2, 3, NaN])); // false, "Input: [1, 2, 3, NaN]"