//  input: numbers, output: number
//  rules:
//  - a number should should be present three times
//    consecutively in num1
//  - a number should should be present two times
//    consecutively in num2

//  algo:
//  - define a calcCounter function which returns the
//    max count of particular number that is present
//    consecutively in num1 and num2
//  - if this function returns 3 and 2 for num1 and num2
//    then we return 1 or else we return 0

//  calcCounter function:
//  - it accepts a number and a target counter value
//  - declare a variable counter = 1
//  - convert the number into a numStr
//  - iterate over the digits of the numStr
//  - if the current number is equal to next number in the
//    iteration then increase the counter by 1
//  - else reset the counter to 1
//  - return the value of counter when it reaches the target
//    counter value

function tripledouble(num1, num2) {
  let number;
  let counter;

  [number, counter] = calcCounter(num1, 3);

  if (counter === 3 && isDouble(num2, 2, number) === 2) {
    return 1;
  } else return 0;
}

function isDouble(num2, target, number) {
  let numStr = String(num2);
  let counter = 1;
  let current;
  let next;

  for (let idx = 0; idx < numStr.length; idx += 1) {
    current = numStr[idx];
    next = numStr[idx + 1];
    if (current !== number) continue;

    if (current === next) counter += 1;
    else counter = 1;
    if (counter === target) return counter;
  }
  return counter;
}

function calcCounter(num, target) {
  let numStr = String(num);
  let counter = 1;
  let current;
  let next;

  for (let idx = 0; idx < numStr.length; idx += 1) {
    current = numStr[idx];
    next = numStr[idx + 1];

    if (current === next) counter += 1;
    else counter = 1;
    if (counter === target) return [current, counter];
  }
  return [counter, counter];
}

console.log(tripledouble(451999277,41177722899)); // 1
console.log(tripledouble(1222345, 12345)); // 0
console.log(tripledouble(12345, 12345)); // 0
console.log(tripledouble(666789, 12345667)); // 1
console.log(tripledouble(10560002, 100)); // 1
console.log(tripledouble(1112, 122)); // 0