let flintstones = { Fred: 0, Wilma: 1,
  Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Approach 1:
// let barney = Object.entries(flintstones)[2];
// console.log(barney);

// Approach 2:
// console.log([].concat(...Object.entries(flintstones).filter(arr => arr[0] === "Barney")));

// Approach 3:
console.log(Object.entries(flintstones).filter(arr => arr[0] === "Barney").flat());

// Approach 4 (LS):
Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();