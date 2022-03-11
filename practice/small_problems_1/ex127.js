function neutralize(sentence) {
  let words = sentence.split(" ");
  let wordsCopy = words.slice();

  words.forEach(word => {
    if (isNegative(word)) {
      const index = wordsCopy.indexOf(word);
      wordsCopy.splice(index, 1);
    }
  });
  return wordsCopy.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.