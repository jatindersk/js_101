let stringy = num => {
  let str = '';
  let idx = 1;

  while (idx <= num) {
    if ((idx % 2) === 1) {
      str += 1;
    } else {
      str += 0;
    }
    idx += 1;
  }
  return str;
};

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"