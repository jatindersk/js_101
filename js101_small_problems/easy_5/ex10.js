// let average = arr => {
//   let average = Math.floor(arr.reduce((acc, el) => acc + el, 0) / arr.length);

//   return average;
// };

// Further exploration:
let average = arr => {
  let sum = 0;

  arr.forEach(el => {
    sum += el;
  });

  let average = Math.floor(sum / arr.length);

  return average;
};


console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40