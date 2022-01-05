function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

// This happens because the solution is mutating the array over which it
// is iterating. The splice method on line 7 removes the current element
// from the array thereby mutating it and as a result the length of the
// array gets reduced by 1. Hence, the index of element next in line
// to the deleted element will reduce by 1. So, on the next iteration it
// skips the element which was next in line to the deleted element.