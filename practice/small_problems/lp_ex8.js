let buyFruit = arr => {
  let fruitsObj = Object.fromEntries(arr);

  let result = [];
  for (let fruit in fruitsObj) {
    let repeat = 1;
    while (repeat <= fruitsObj[fruit]) {
      result.push(fruit);
      repeat += 1;
    }
  }
  return result;
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]