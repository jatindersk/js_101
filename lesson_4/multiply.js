function multiply(numbers, criteria) {
  let counter = 0;
  let multipliedNums = [];

  while (counter < numbers.length) {
    multipliedNums.push(numbers[counter] * criteria);

    counter += 1;
  }

  return multipliedNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]