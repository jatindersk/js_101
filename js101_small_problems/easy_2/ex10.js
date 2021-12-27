let stringToInteger = string => {
  const DIGIT = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let numArr = string.split('').map(val => DIGIT[val]);
  let value = 0;
  numArr.forEach(num => {
    value = (value * 10) + num;
  });
  return value;
};

let stringToSignedInteger = str => {
  if (str[0] === '+' ) {
    return stringToInteger(str.slice(1));
  } else if (str[0] === '-') {
    return ((-1) * stringToInteger(str.slice(1)));
  } else {
    return stringToInteger(str);
  }
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true