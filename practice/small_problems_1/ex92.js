let buyFruit = arr => {
  return arr.reduce((acc, subArr) => {
    let count = 1;
    while (count <= subArr[1]) {
      acc.push(subArr[0]);
      count += 1;
    }
    return acc;
  }, []);
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


// let resultArr = [];

  // arr.forEach(subArr => {
  //   let count = 1;
  //   while (count <= subArr[1]) {
  //     resultArr.push(subArr[0]);
  //     count += 1;
  //   }
  // });
  // return resultArr;