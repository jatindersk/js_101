let buyFruit = arr => {
  let fruitObj = Object.fromEntries(arr); // { apple: 3, orange: 1, banana: 2 }

  let buyFruitArr = [];
  for (let key in fruitObj) {
    while (fruitObj[key] > 0) {
      buyFruitArr.push(key);
      fruitObj[key] -= 1;
    }
    //    buyFruitArr.push((key + ' ').repeat(fruitObj[key]));
  }

  return buyFruitArr;
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]