let stringToInteger = str => {
  let result = 0;

  str.split('').forEach((el, idx) => {
    result += el * Math.pow(10, (str.length - (idx + 1)));
  });

  return result;
};

let stringToSignedInteger = str => {
  if (str[0] === '-') {
    return (-1) * stringToInteger(str.slice(1));
  } else if (str[0] === '+') return stringToInteger(str.slice(1));
  else return stringToInteger(str);
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true