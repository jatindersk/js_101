let swapName = str => {
  let wordsArr = str.split(' ');
  if (wordsArr.length > 2) {
    return wordsArr.splice(wordsArr.length - 1, 1).concat(wordsArr.slice(0).join(' ')).join(', ');
  } else {
    return wordsArr.reverse().join(', ');
  }
};

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"