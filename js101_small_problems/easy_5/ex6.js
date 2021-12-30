let multiplicativeAverage = arr => {
  let product = arr.reduce((acc, el) => acc * el, 1);

  let productStr = (product / arr.length).toFixed(3);
  productStr = String(productStr);
  return productStr;
};

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"