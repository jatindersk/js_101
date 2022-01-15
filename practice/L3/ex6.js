let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false
console.log(Number.isNaN(nanArray[0])); // true