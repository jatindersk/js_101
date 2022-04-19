let buyFruit = arr => {
  let result = [];

  arr.forEach(subArr => {
    while (subArr[1] > 0) {
      result.push(subArr[0]);
      subArr[1] -= 1;
    }
  });

  return result;
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]