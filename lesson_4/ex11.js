let statement = "The Flintstones Rock";

// use split to convert the string to an array of characters
// loop through the array and check whether the current string
//      is included in the array. Use the current index as start index
//      for the search
//
let counterObj = {};

statement.split("").forEach(str => {
  let count = 0;

  if (str !== " ") {
    for (let idx = 0; idx < statement.length; idx += 1) {

      if (str === statement[idx]) {
        count += 1;
      }
    }
    counterObj[str] = count;
  }
});

console.log(counterObj); // { T: 1, h: 1, e: 2, F: 1, l: 1, ... }