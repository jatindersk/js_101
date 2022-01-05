// input : string with empty slots to put random words
// outpt: string with random words from lists
// Rules:
//  Explicit:
//  - list of nouns, verbs, adverbs and adjectives

// Algorithm:
//  - convert the input string to an array of words
//  - use slice(' ') method
//  - store the nouns, verbs, adverbs and adjectives
//    in arrays
//  - generate a random number to select a random word
//    from nouns, verbs, adverbs and adjectives arrays
//  - use splice(idx, 0, randomWord) method to insert
//    random words to random indexes in the array
//  - generate random index to select the position where
//    to insert the randomWord

let adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
let adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];
let wordsArr = [adjectives, nouns, verbs, adverbs];

let madlibs = str => {
  let strArr = str.split(' ');
  let randomNum = Math.floor(Math.random() * (wordsArr.length));

  function generateMadlibs() {
    let randomIndex = Math.floor(Math.random() * (strArr.length));
    let maxIteration = Math.floor(Math.random() * ((7 - 2 + 1) + 2));
    let loop = 0;

    while (loop < maxIteration) {
      let randomWord = fetchRandomWord(wordsArr[randomNum]);

      for (let idx = 0; idx < maxIteration; idx += 1) {
        strArr.splice(randomIndex, 0, randomWord);
      }
      loop += 1;
    }
  }
  generateMadlibs();
  return strArr.join(' ');
};

function fetchRandomWord(arr) {
  let randomNum = Math.floor(Math.random() * (arr.length));
  return arr[randomNum];
}

let template1 = 'The brown the yellow, who his and looks around.';
console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.