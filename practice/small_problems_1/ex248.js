let buyFruit = arr => {
  return arr.reduce((acc, subArr) => {
    while (subArr[1] > 0) {
      acc.push(subArr[0]);
      subArr[1] -= 1;
    }
    return acc;
  }, []);
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]