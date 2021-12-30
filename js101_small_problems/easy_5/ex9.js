let countOccurrences = arr => {
  let occObj = {};

  arr.forEach(el => {
    if (!occObj[el]) {

      arr.forEach(word => {
        if (el === word) {
          occObj[el] = occObj[el] || 0;
          occObj[el] += 1;
        } else {
          occObj[el] = occObj[el] || 0;
        }
        console.log(occObj);
      });
    }
  });

  for (let key in occObj) {
    console.log(`${key} => ${occObj[key]}`);
  }
};


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2