let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false
// NaN is the only JavaScript value which is not equal to itself

// Bonus Question Answer:
console.log(Number.isNaN(nanArray[0]));
console.log(Object.is(nanArray[0], NaN));