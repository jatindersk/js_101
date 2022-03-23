function persistence(num) {
  let result = 0;

  while (![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(num)) {
    num = String(num);
    num = num.split('').reduce((mul, num) => mul * num, 1);
    result += 1;
  }

  return result;
}

console.log(persistence(39)); // 3
console.log(persistence(4)); // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4