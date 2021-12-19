let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

// Alternate (didn't work)
// console.log(str1.split(' ').filter(str => str === 'Dino'));
// console.log(str2.split(' ').filter(str => str === 'Dino'));

// Alterate (using regex)
console.log(/Dino/.test(str1));
console.log(/Dino/.test(str2));

// Alternate
console.log(str1.indexOf('Dino') >= 0);
console.log(str2.indexOf('Dino') >= 0);

// Alternate
console.log(!!str1.match('Dino'));
console.log(!!str2.match('Dino'));

// LS approach for match method
// str1.match('Dino') !== null; // false
// str2.match('Dino') !== null; // true