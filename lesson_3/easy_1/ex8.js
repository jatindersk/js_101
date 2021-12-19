let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones[flintstones.length] = "Dino";
// console.log(flintstones);

// Alternate 1
// flintstones.push("Dino");
// console.log(flintstones);

// // Alternate 2
// flintstones.unshift("Dino");
// console.log(flintstones);

// Alternate 3
flintstones = flintstones.concat("Dino");
console.log(flintstones);