let multiplyList = (arr1, arr2) => arr1.map((el, idx) => el * arr2[idx]);

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]