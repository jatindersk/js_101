//  input: object, output: number
//  rules:
//  - input object contains user's rank and honor
//  - return the rank of user with least difference
//    between rank and honor
//  - if multiple users have same difference then return
//    the lowest rank

//  algo:
//  - declare a difference array
//  - iterate over the object keys
//  - push the difference and corresponding rank into
//    the difference array
//  - sort the difference array in ascending numeric order
//    - if the difference is same for two subsequent elements
//      then sort based on their ranks

function nexus(users) {
  let difference = [];
  let diff;

  for (let key in users) {
    diff = Math.abs(users[key] - (+key));
    difference.push([diff, +key]);
  }

  difference.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  return difference[0][1];
}

console.log(nexus({ 1: 3, 3: 3, 5: 3 })); // 3