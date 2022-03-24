//  - start the index from 1 upto length - 2
//  - in each iteration slice the array in two halfs and sum each half
//  - compare whether two sums are equal
//  - if no such index found then return -1

function findEvenIndex(arr) {

  for (let idx = 0; idx < arr.length; idx += 1) {
    let leftSide = arr.slice(0, idx);
    let rightSide = arr.slice(idx + 1);

    if (computeSum(leftSide) === computeSum(rightSide)) return idx;
  }

  return -1;
}

function computeSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(findEvenIndex([20,10,-80,10,10,15,35] )); // 0, "The array was: [20,10,-80,10,10,15,35]
console.log(findEvenIndex([1,2,3,4,3,2,1])); // 3, "The array was: [1,2,3,4,3,2,1]
console.log(findEvenIndex([1,100,50,-51,1,1])); // 1, "The array was: [1,100,50,-51,1,1]
console.log(findEvenIndex([1,2,3,4,5,6])); // -1, "The array was: [1,2,3,4,5,6]
console.log(findEvenIndex([20,10,30,10,10,15,35])); //3, "The array was: [20,10,30,10,10,15,35]