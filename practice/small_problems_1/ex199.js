//  find the difference between the ranks and honors
//  find the least value among the calculated difference values
//  return the associated rank
//  if the difference is same then return the lowest rank (numerically)

//  - declare a result object
//  - iterate over the input object's properties
//  - create a new key value pair for each property in input object
//  - the value in result object will be an array [honor, difference]
//  - convert the result object into an array and assign it to result
//  - sort the nested array as per the difference
//  - if difference is same then sort it as per the key value
//  - return the first element of the first nested array in result array

function nexus(users) {
  let difference;
  let result = {};

  for (let key in users) {
    difference = Math.abs((+key) - users[key]);
    result[key] = [users[key], difference];
  }

  result = Object.entries(result);
  result.sort((a, b) => {
    if (a[1][1] === b[1][1]) return (+a[0]) - (+b[0]);
    return a[1][1] - b[1][1];
  });

  return (+result[0][0]);
}

console.log(nexus({ 1: 3, 3: 3, 5: 3 })); // 3