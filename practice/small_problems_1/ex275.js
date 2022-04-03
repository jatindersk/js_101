function bubbleSort(arr) {
  let swap;
  let current;
  let next;

  while (true) {
    swap = false;

    for (let idx = 0; idx < arr.length - 1; idx += 1) {
      current = arr[idx];
      next = arr[idx + 1];
      if (current <= next) continue;
      [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
      swap = true;
    }
    if (swap === false) break;
  }
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