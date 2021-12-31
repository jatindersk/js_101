let doubleConsonants = str => {
  let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  let doubledStr = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    if (isAlphabet(str[idx].toLowerCase()) && !vowels.includes(str[idx])) {
      doubledStr.push(str[idx] + str[idx]);
    } else {
      doubledStr.push(str[idx]);
    }
  }

  return doubledStr.join('');
};

function isAlphabet(letter) {
  return (letter >= 'a' && letter <= 'z');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""