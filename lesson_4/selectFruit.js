let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let fruits = {};

let selectFruit = obj => {
  for (let key in obj) {
    if (obj[key] === 'Fruit') {
      fruits[key] = obj[key];
    }
  }

  return fruits;
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// LS Approach:
function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}