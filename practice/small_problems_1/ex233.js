let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let result = {};

  arr.forEach(el => {
    result[el] = result[el] || 0;
    result[el] += 1;
  });

  return result;
}

console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2