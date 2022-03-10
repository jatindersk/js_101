//  declare a swap variable
//  iterate through the array
//  compare consecutive elements in each iteration
//  swap if element1 > element2 and set swap to true
//  if swap is false then return the array
//  else keep iterating

function bubbleSort(arr) {
  let swap;
  do {
    swap = false;
    for (let idx = 0; idx < arr.length - 1; idx += 1) {
      if (arr[idx] > arr[idx + 1]) {
        swap = true;
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
      }
    }
  } while (swap);

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