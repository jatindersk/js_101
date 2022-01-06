let stringToInteger = str => {
  const NUMBERS = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4,
    5: 5, 6: 6, 7: 7, 8: 8, 9: 9
  };

  let numArr = str.split('').map(el => NUMBERS[el]);
  return numArr.reduce((result, num) => (10 * result) + num , 0);
};

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true