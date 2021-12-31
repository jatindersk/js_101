let sequence = num => {
  let array = [];
  let idx = num;

  while (idx > 0) {
    array.push(idx);
    idx -= 1;
  }

  return array.reverse();
};

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]