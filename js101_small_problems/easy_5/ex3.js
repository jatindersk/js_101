// // Approach 1:
// let halvsies = arr => {
//   let middle = Math.floor(arr.length / 2);
//   let halfedArr = [];

//   if (arr.length % 2 === 0) {
//     halfedArr[0] = arr.slice(0, middle);
//     halfedArr[1] = arr.slice(middle, arr.length);
//   } else {
//     halfedArr[0] = arr.slice(0, middle + 1);
//     halfedArr[1] = arr.slice(middle + 1);
//   }

//   return halfedArr;
// };

// Approach 2:
let halvsies = arr => {
  let middle = Math.round(arr.length / 2);
  let halfedArr = [];

  halfedArr[0] = arr.slice(0, middle);
  halfedArr[1] = arr.slice(middle);

  return halfedArr;
};

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]