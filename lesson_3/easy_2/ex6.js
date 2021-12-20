let flintstones = ["Fred", "Wilma"];

// Approach 1:
// flintstones.push(["Barney", "Betty"][0], ["Barney", "Betty"][1]);
// flintstones.push(["Bambam", "Pebbles"][0], ["Bambam", "Pebbles"][1]);
// console.log(flintstones);

flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// Approach 2:
// console.log(...flintstones); // for testing adn understanding the ... syntax
// flintstones = [].concat(...flintstones);
// console.log(flintstones);

// Approach 3:
// flintstones = flintstones.reduce((acc, el) => {
//   let test = acc.concat(el); // for testing and understanding the flow
//   console.log(test);         // for testing and understanding the flow
//   return test;
// }, []);
// console.log(flintstones);

// Approach 4:
// let newFlintstones = [];
// flintstones.forEach(element => {
//   newFlintstones = newFlintstones.concat(element);
// });
// console.log(newFlintstones);

// Approach 5:
let newFlintstones = flintstones.flat();
console.log(newFlintstones);