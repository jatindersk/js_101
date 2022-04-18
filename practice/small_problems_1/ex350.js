let multiplyAllPairs = (arr1, arr2) => {
  let products = arr1.reduce((mult, num) => {
    arr2.forEach(el => mult.push(el * num));
    return mult;
  }, []);

  products.sort((a, b) => a - b);
  return products;
};

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]