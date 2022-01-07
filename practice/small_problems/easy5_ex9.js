
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

let countOccurrences = arr => {
  let result = {};
  arr.forEach(el => {
    if (!result[el]) {
      result[el] = 1;
    } else {
      result[el] += 1;
    }
  });
  for (let key in result) {
    console.log(`${key} => ${result[key]}`);
  }
};

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2