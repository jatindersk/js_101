let penultimate = str => {
  let strArr = str.split(' ');
  return strArr[strArr.length - 2];
};

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true