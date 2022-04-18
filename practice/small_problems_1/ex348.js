let sum = num => {
  if (num === 0) return 0;

  let total = 0;

  total += num % 10;
  num = (num - (num % 10)) / 10;
  total += sum(num);

  return total;
};

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45