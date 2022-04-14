//  input: array, output: number
//  rules:
//  - either all the numbers except one will be odd
//  - either all the numbers except one will be even

//  algo:
//  - declare two variables odd = [] and even = []
//  - iterate over the numbers of input array
//  - if number is odd then push it odd array
//  - if number is even then push it to even array
//  - after iteration has finished check:
//  - if odd array's length === 1 then return odd[0]
//  - if even array's length === 1 then return even[0]

function findOutlier(integers) {
  let odd = [];
  let even = [];

  integers.forEach(num => {
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  });

  if (odd.length === 1) return odd[0];
  else return even[0];
}

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([2,6,8,10,3])); // 3
console.log(findOutlier([0,0,3,0,0])); // 3
console.log(findOutlier([1,1,0,1,1])); // 0