//  input: array, output: string
//  algorithm:
//  - initiate an empty object
//  - iterate through the input array
//  - in each iteration, check whether the current element exists as
//  a key name in the object. If not, then set the current element
//  as key name in the object and set it to 1
//  - if the current element already exists as a key name, then
//  increase it's value by 1

let countOccurrences = arr => {
  let resultsObj = {};
  arr.forEach(el => {
    if (resultsObj[el]) resultsObj[el] += 1;
    else resultsObj[el] = 1;
  });

  displayResult(resultsObj);
};

function displayResult(resultsObj) {
  for (let key in resultsObj) {
    console.log(`${key} => ${resultsObj[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2