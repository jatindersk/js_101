let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

// let arr = Object.entries(additionalAges);

// ages[arr[0][0]] = arr[0][1];
// ages[arr[1][0]] = arr[1][1];
// console.log(ages);

// Alternate
Object.assign(ages, additionalAges);
console.log(ages);