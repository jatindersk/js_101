let stringToSignedInteger = numStr => {
  const DIGITS = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9
  };

  let sliced;
  if (numStr[0] === '+' || numStr[0] === '-') sliced = numStr.slice(1);
  else sliced = numStr.slice(0);

  let result = sliced.split('').map(char => DIGITS[char]);
  let value = 0;
  result.forEach(num => {
    value = (value * 10) + num;
  });

  if (Math.sign(numStr) === -1) return -value;
  else return value;
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true