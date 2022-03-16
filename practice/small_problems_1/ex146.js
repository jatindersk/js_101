//  - iterate through the array of directions
//  - if the current direction is opposite of next element direction
//    then do nothing and set the next index to idx + 2
//  - else slice the two element and push them to result array

//  input: array, output: output
//  declare a result variable and initialize it to an empty array
//  iterate over the input array and push each element
//    to the result array
//  In each iteration before pushing we need to check whether the
//   last element in result is current element's opposite

function dirReduc(arr) {
  let result = [];

  arr.forEach(dir => {
    pushDirections(dir, result);
  });

  return result;
}

function pushDirections(dir, result) {
  switch (dir) {
    case 'NORTH':
      if (result[result.length - 1] === 'SOUTH') result.pop();
      else result.push(dir);
      break;
    case 'SOUTH':
      if (result[result.length - 1] === 'NORTH') result.pop();
      else result.push(dir);
      break;
    case 'EAST':
      if (result[result.length - 1] === 'WEST') result.pop();
      else result.push(dir);
      break;
    default:
      if (result[result.length - 1] === 'EAST') result.pop();
      else result.push(dir);
      break;
  }
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]