let stringToInteger = str => {
  let result = 0;

  str.split('').forEach((el, idx) => {
    result += el * Math.pow(10, (str.length - (idx + 1)));
  });

  return result;
};

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true