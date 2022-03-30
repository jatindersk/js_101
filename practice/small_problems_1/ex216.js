function stringToInteger(numStr) {
  return numStr.split('').reduce((acc, char, idx) => {
    acc += Math.pow(10, numStr.length - (idx + 1)) * char;
    return acc;
  }, 0);
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true