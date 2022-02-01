//  rules:
//  - iterate through the array until there is no swap
//  algorithm:
//  - declare a swap variable
//  - use a generic while loop
//  - how to access the two numbers?

function bubbleSort(arr) {
  while (true) {
    let swap = false;
    for (let num1 = 0; num1 < arr.length - 1; num1 += 1) {
      if (arr[num1] > arr[num1 + 1]) {
        [arr[num1], arr[num1 + 1]] = [arr[num1 + 1], arr[num1]];
        swap = true;
      } else {
        continue;
      }
    }
    if (!swap) break;
  }
  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]