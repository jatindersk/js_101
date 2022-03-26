//  - if all the integers in the input array are even then we will have
//    a filtered array containing more than 2 elements
//    (since input array length >= 3)

//  - then we just iterate over the original array and find the integer
//    which is not present in the filtered array

//  - if all the integers in the input array are odd then we will have
//    a filtered array containing exaclty 1 element
//  - we then return the only element in this case

function findOutlier(integers) {
  let filtered = integers.filter(num => num % 2 === 0);

  if (filtered.length > 1) {
    return integers.find(int => !filtered.includes(int));
  }
  return filtered.shift();
}

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([2,6,8,10,3])); // 3
console.log(findOutlier([0,0,3,0,0])); // 3
console.log(findOutlier([1,1,0,1,1])); // 0