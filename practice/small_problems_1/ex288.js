//  algo:
//  - compare each letter of w1 to w2
//  - if the letter exists in w2 then remove it from w2
//  - else increase the counter value by 1
//  - at the end add the length of w2 string to counter value

//  NOTE: Basically we the letters which are different in w1 string
//        are counted by counter variable
//        The letters which are different in w2 are counted at the end
//        as w2.length (as similar letters will be eleminated)

function anagramDifference(w1,w2) {
  let counter = 0;
  let word1Arr = w1.split('');
  let word2Arr = w2.split('');

  word1Arr.forEach(letter => {
    if (word2Arr.includes(letter)) {
      let index = word2Arr.indexOf(letter);
      word2Arr.splice(index, 1);
    } else counter += 1;
  });
  return counter + word2Arr.length;
}

// console.log(anagramDifference("a","aab")); // 2
// console.log(anagramDifference("codewars","hackerrank")); // 10
console.log(anagramDifference("emscjglbbegfe","vhhvhmvedugcr")); // 18