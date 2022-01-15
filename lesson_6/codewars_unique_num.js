// algorithm:
//  - make a copy of the array
//  - remove the current element from the copy of the array
//  - use includes to check whether the removed element is in the mutated copy

function findUniq(arr) {
  let arrCopy = arr.slice();
  for (let idx = 0; idx < arr.length; idx += 1) {
    let removedNum = arrCopy.splice(idx, 1)[0];
    // console.log(arrCopy);
    // console.log(`removed num: ${removedNum}...arrCopy: ${arrCopy}`);
    // console.log(`check conditional: ${(arrCopy.includes(removedNum))}`);
    if (!arrCopy.includes(removedNum)) return removedNum;
    arrCopy = arr.slice();
    //console.log(`arrCopy renewed: ${arrCopy}`);
  }
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

// function findUniq(arr) {
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     let counter = 0;
//     for (let ind = 0; ind < arr.length; ind += 1) {
//       if (arr[idx] !== arr[ind]) {
//         counter += 1;
//         if (counter === 2) {
//           return arr[idx];
//         }
//       }
//     }
//   }
// }