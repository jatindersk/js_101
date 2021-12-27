// My Approach:
// let xor = (arg1, arg2) => {

//   if ((arg1 && !!arg2 === false) || (!!arg1 === false && arg2)) {
//     return true; // 1 && false || false && 1 // false || false 
//   } else {
//     return false;
//   }
// };


// LS approach:
function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);