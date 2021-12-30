let interleave = (arr1, arr2) => {
  let finalArr = [];

  arr1.forEach((el, idx) => {
    finalArr.push(el, arr2[idx]);
  });

  return finalArr;
};

// // Further Exploration: (Incorrect)
// let interleave = (arr1, arr2) => {

//   let finalArr = arr2.reduce((acc, el) => {
//     //console.log(`${acc} and ${el}`);
//     let newArr = acc.slice(arr2.indexOf(el) + 1);
//     newArr.unshift(el);
//     newArr.unshift(acc.slice(arr2.indexOf(el)));
//     return acc;
//   }, arr1);

//   return finalArr;
// };

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]