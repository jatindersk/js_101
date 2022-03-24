//  - iterate over arr2
//  - in each iteration, make the current element the
//    section / filteration critera to remove same elements from arr1
//  - return the arr1

let arrayDiff = (arr1, arr2) => {
  arr2.forEach(num => {
    let filterCriteria = num;

    arr1 = arr1.filter(el => el !== filterCriteria);
  });

  return arr1;
};

console.log(arrayDiff([1, 2, 2], [2])); // [1]

// console.log(arrayDiff([], [4,5])); // [], "a was [], b was [4,5]"
// console.log(arrayDiff([3,4], [3])); // [4], "a was [3,4], b was [3]"
// console.log(arrayDiff([1,8,2], [])); // [1,8,2], "a was [1,8,2], b was []"
// console.log(arrayDiff([1,2,3], [1,2])); // [3], "a was [1,2,3], b was [1,2]"


//  - iterate over the second array
//  - compare each number from 2nd array to 1st array
//  - for every same value in 1st array, replace it by an empty string ''
//  - keep repeating the above step until 1st array is completely free of b values
//  - filter out the empty strings from the 1st array
//  - return the result

// function arrayDiff(a, b) {
//   if (b.length === 0 || a.length === 0) return a;

//   while (b.some(el => a.includes(el))) {
//     b.forEach(num => {
//       if (a.includes(num)) {
//         let index = a.indexOf(num);
//         a[index] = '';
//       }
//     });
//   }

//   return a.filter(num => num !== '');
// }