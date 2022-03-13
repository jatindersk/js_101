function moveZeros(arr) {
  let zeros = [];
  let arrCopy = [...arr];
  for (let idx = 0; idx < arrCopy.length; idx += 1) {
    if (arrCopy[idx] === 0) {
      zeros.push(...arr.splice(arr.findIndex(el => el === 0), 1));
    }
  }
  arr.push(...zeros);
  return arr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
let newarr = [ 9, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ];
console.log(moveZeros(newarr));
// [ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];