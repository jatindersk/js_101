let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = {};

// Approach 1 :

// let val = 0;

// for (let key of flintstones) {
//   flintstonesObj[key] = val;
//   val += 1;
// }

// Approach 2 :

for (let key of flintstones) {
  flintstonesObj[key] = flintstones.indexOf(key);
}

// LS Approach:

let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

flintstonesObj; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

console.log(flintstonesObj);