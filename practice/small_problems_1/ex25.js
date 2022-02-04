//  input: array, output: array with elements reversed
//  algorithm:
//  - iterate through the array using a for loop for arr length - 2 times
//  - on each iteration, remove the first element

let reverse = arr => {
  let arrElements = arr.splice(0);
  arr.push(...arrElements.reverse());
  return arr;
};

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true


// failed attempt::

// let reverse = arr => {
//   return arr.reduce((acc, el) => {
//     acc.unshift(el);
//     console.log(acc);
//     return acc;
//   } ,[]);
// };