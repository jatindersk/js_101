let swapName = str => {
  str = str.split(' ');
  return str[str.length - 1] + ', ' + str.slice(0, str.length - 1).join(' ');
};

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"