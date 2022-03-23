function mineLocation(field) {
  let result = [];
  field.forEach((arr, row) => {
    arr.forEach((el, col) => {
      if (el === 1) result.push(row, col);
    });
  });

  return result;
}

console.log(mineLocation([ [1, 0], [0, 0] ])); // [0, 0]
console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ])); // [0, 0]
console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ])); // [2, 2]