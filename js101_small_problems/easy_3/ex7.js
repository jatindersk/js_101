let isEvenLength = numLength => (numLength % 2) === 0;

let sameDigits = num => { // 4242

  let firstHalf = num.slice(0, (num.length / 2)); // 42
  let secondHalf = num.slice((num.length / 2), num.length); // 42

  return firstHalf === secondHalf;
};

let twice = num => {
  let numLength = String(num).length;

  if (isEvenLength(numLength) && sameDigits(String(num))) {
    return num;
  }
  return (num * 2);
};

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676