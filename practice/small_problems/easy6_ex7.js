// let swapName = str => str.split(' ').reverse().join(', ');

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further exploration
let swapName = str => {
  let strArr = str.split(' ');
  let firstMid = strArr.slice(0, strArr.length - 1);
  let result = strArr[strArr.length - 1] + ', ' + firstMid.join(' ');
  return result;
};

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"