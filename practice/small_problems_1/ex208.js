//  convert the number into a string and iterate over it
//  remove each digit in every iteration and save the number
//  find the minimum of the saved numbers and return it
//  Adhitiani

function solve(n, k) { // (1284569, 4)
  let str = String(n);
  let arr = [[str]];
  console.log(`arr`);
  console.log(arr);
  for (let i = 1; i <= k; i += 1) {
    console.log(`i is ${i}`);
    arr[i] = removeNum(arr, i);
    console.log(`arr[${i}] is`);
    console.log(arr[i]);
  }
  arr[k].sort((a, b) => Number(a) - Number(b));
  return arr[k][0];
}

function removeNum(array, idx) {
  console.log(`array is`);
  console.log(array);
  let prevArr = array[idx - 1];
  let newArr = [];
  console.log(`prevArr is`);
  console.log(prevArr);
  prevArr.forEach(elem => {
    for (let j = 0; j < elem.length; j += 1) {
      newArr.push(elem.slice(0, j) + elem.slice(j + 1));
    }
  });
  console.log(`newArr`);
  console.log(newArr);
  return newArr;
}

// console.log(solve(123056, 4)); // '05'
// console.log(solve(123056,1)); // '12056'
// console.log(solve(123056,2)); // '1056'
// console.log(solve(123056,3)); // '056'
// console.log(solve(1284569,1)); // '124569'
// console.log(solve(1284569, 2)); // '12456'
// console.log(solve(1284569, 3)); // '1245'
console.log(solve(1284569, 4)); // '124'


// let numStr = String(num);
// let result = [];

// // numStr.split('').forEach((_, idx) => {
// //   result.push(numStr.slice(0, idx) + numStr.slice(idx + 1));
// // });

// for (let idx = 0; idx < numStr.length; idx += 1) { // 123056
//   // console.log(`current char ${numStr[idx]}`);
//   let currentNum = numStr.slice(0, idx) + numStr.slice(idx + digits);
//   // console.log(`currentNum ${currentNum}`);
//   if (currentNum.length !== numStr.length - digits) {
//     // console.log(`special case`);
//     let deleteCount = currentNum.length - (numStr.length - digits);
//     // let firstHalf = numStr.slice(0, idx);
//     // firstHalf = firstHalf.split('').splice(0, deleteCount).join('');
//     currentNum = currentNum.split('');
//     currentNum.splice(0, deleteCount);
//     currentNum = currentNum.join('');
//   }

//   //console.log(currentNum);
//   result.push(currentNum);
// }
// console.log(result);
// result.sort((a, b) => (+a) - (+b));
// return result[0];