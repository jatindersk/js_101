//  input: array, output: array
//  algo:
//  - iterate over the list b elements
//  - in each iteration the current element from list
//    b will be used to filter out similar elements from list a
//  - return the filtered list a

function arrayDiff(a, b) {
  b.forEach(el => {
    a = a.filter(num => num !== el);
  });

  return a;
}

console.log(arrayDiff([1,2], [1])); // [2] // "a was [1,2], b was [1]"
console.log(arrayDiff([1,2,2], [1])); // [2,2], "a was [1,2,2], b was [1]"
console.log(arrayDiff([1,2,2], [2])); // [1], "a was [1,2,2], b was [2]"
console.log(arrayDiff([1,2,2], [])); // [1,2,2], "a was [1,2,2], b was []"
console.log(arrayDiff([], [1,2])); // [], "a was [], b was [1,2]"
console.log(arrayDiff([1,2,3], [1,2])); // [3], "a was [1,2,3], b was [1,2]"