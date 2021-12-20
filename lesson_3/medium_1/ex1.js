// My Approach:
// let string = "The Flintstones Rock!";
// for (let idx = 1; idx <= 10; idx += 1) {
//   console.log(string.padStart(idx + string.length, " "));
// }

// LS Approach:
for (let padding = 1; padding <= 10; padding += 1) {
  console.log(" ".repeat(padding) + "The Flintstones Rock!");
}