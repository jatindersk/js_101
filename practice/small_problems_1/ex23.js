// function swapName(str) {
//   return str.split(' ').reverse().join(', ');
// }

// refactored:
function swapName(str) {
  let splitArr = str.split(' ');
  if (splitArr.length <= 2) {
    return str.split(' ').reverse().join(', ');
  } else {
    return splitArr[splitArr.length - 1] + ', ' + splitArr.slice(0, splitArr.length - 1).join(' ');
  }
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"