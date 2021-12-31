// let swapName = str => {
//   let reversedStr = '';
//   let indexOfSpace = str.indexOf(' ');
//   reversedStr += str.slice(0, indexOfSpace);

//   reversedStr = ',' + str.slice(indexOfSpace, indexOfSpace + 1)
// + reversedStr;
//   reversedStr = str.slice(indexOfSpace + 1) + reversedStr;

//   return reversedStr;
// };

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further Exploration:

let swapName = str => {
  let reversedArr = str.split(' ').reverse();
  let newArr = reversedArr.map((el, idx) => {
    if (idx !== 0) {
      return el;
    }
    return el + ',';
  });

  return newArr.join(' ');
};

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"