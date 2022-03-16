//  input: array, output: number
//  declare and initialize an empty object
//  iterate through the array and set each array element
//  as the property of the result object
//  increment the value of property by 1 for each mathing number
//  Extract all the values of the result object and divide them by
//  2 to get the possible number of pairs
//  Sum up all the values of the result object's properties to get the
//  output

function duplicates(array) {
  if (array.length < 2) return 0;
  let result = {};

  array.forEach(num => {
    result[num] = result[num] || 0;
    result[num] += 1;
  });

  for (let key in result) {
    result[key] = Math.floor(result[key] / 2);
  }

  return Object.values(result).reduce((sum, num) => sum + num);
}

console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])); // 4
console.log(duplicates([1, 2, 5, 6, 5, 2])); // 2
