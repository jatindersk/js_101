//  the max number obtained after deleting one digit will
//    always have a length one less than the original num
//  - convert the input num into a string
//  - iterate over the numString
//  - in each iteration, delete the current element from the
//    numString and push the remaining numString to the result array
//  - find the maximum number in the result array and return it

function deleteDigit(num) {
  let numStr = String(num);
  let result = [];

  for (let idx = 0; idx < numStr.length; idx += 1) {
    let subStr = numStr.slice(0, idx) + numStr.slice(idx + 1);
    result.push(subStr);
  }
  return Math.max(...result);
}

console.log(deleteDigit(152)); // 52
console.log(deleteDigit(1001)); // 101
console.log(deleteDigit(10)); // 1

// for (let start = 0; start < numStr.length; start += 1) {
  //   for (let end = start + 1; end <= numStr.length; end += 1) {
  //     let subStr = numStr.slice(start, end);
  //     if (subStr.length === lengthLim) continue;
  //     result.push(subStr);
  //   }
  // }