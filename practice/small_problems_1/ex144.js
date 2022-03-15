//  inputL: string, output: string
//  - convert the string to an array of numbers
//  - replace each number by an array [number, sum of its digits]
//  - sort the list by sum of its digits

function orderWeight(strng) {
  let numArr = strng.split(' '); // .map(numStr => Number(numStr));
  let result = [];
  let sumOfDigits = numArr.map(numStr => {
    return [numStr, numStr.split('').reduce((sum, num) => sum + Number(num), 0)];
  });
  sumOfDigits = sortBySum(sumOfDigits);
  // sumOfDigits.sort((a, b) => a[1] - b[1]);
  // console.log(sumOfDigits);
  let swap;
  while (true) {
    swap = false;
    for (let idx = 0; idx < sumOfDigits.length - 1; idx += 1) {
      if (sumOfDigits[idx][1] === sumOfDigits[idx + 1][1] &&
        needsAlphabeticalSorting(sumOfDigits[idx][0], sumOfDigits[idx + 1][0])) {
          swap = true;
        [sumOfDigits[idx], sumOfDigits[idx + 1]] =
          [sumOfDigits[idx + 1], sumOfDigits[idx]];
      }
    }
    if (swap === false) break;
  }
  sumOfDigits.forEach(subArr => result.push(subArr[0]));
  return result.join(' ');
}

function sortBySum(arr) {
  let swap;

  while (true) {
    swap = false;
    for (let idx = 0; idx < arr.length - 1; idx += 1) {
      if (arr[idx][1] > arr[idx + 1][1]) {
        swap = true;
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
      }
    }
    console.log(`arr ${arr}`);
    if (swap === false) break;
  }
  // console.log(arr);
  return arr;
}

function needsAlphabeticalSorting(numStr1, numStr2) {
  // console.log(`num1 and num2:; ${numStr1} ${numStr2}..num1 < num2 ${numStr1 < numStr2}`);
  return numStr1 > numStr2;
}

console.log(orderWeight('7 7 27 72 18 81 9 91'));
// console.log(orderWeight('1 2 200 4 4 6 6 7 7 27 72 18 81 9 91 425 31064 7920 67407 96488 34608557 71899703'));
// // '1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703'

// console.log(orderWeight("30 141 25 34 126 72 175 157 410710 78 88 90125 99 220790 405191 135655 293436 273880 286916 75938 486791"));
// // "30 141 25 34 126 72 157 175 410710 78 88 90125 99 220790 405191 135655 293436 273880 286916 75938 486791";

// console.log(orderWeight("103 123 4444 99 2000")); // "2000 103 123 4444 99"
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); // "11 11 2000 10003 22 123 1234000 44444444 9999"