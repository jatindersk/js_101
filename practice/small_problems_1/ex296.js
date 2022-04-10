//  input: array, output: boolean

//  algo:
//  - use a guard clause to handle invalid arguments
//  - replace all the numbers in array2 by their square roots
//  - iterate over array1
//  - in each iteration check whether the current number exists
//    in array2
//  - if it does then remove the current number from array2
//  - after the iteration check whether length of array2 === 0
//    (as all similar elements will have been eliminated)

function comp(array1, array2) {
  if (invalidArgument(array1, array2)) return false;

  array2 = array2.map(num => Math.sqrt(num));

  array1.forEach(num => deleteNumber(num, array2));
  return array2.length === 0;
}

function deleteNumber(num, array2) {
  if (array2.includes(num)) {
    array2.splice(array2.indexOf(num), 1);
  }
}

function invalidArgument(array1, array2) {
  return array1 === null || array2 === null;
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161,
  19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2)); // true