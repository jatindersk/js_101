let countOccurrences = arr => {
  let obj = {};
  arr.forEach(el => {
    // el = el.toLowerCase();
    obj[el] ? obj[el] += 1 : obj[el] = 1;
  });
  logCount(obj);
};

function logCount(obj) {
  for (let key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'Car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2