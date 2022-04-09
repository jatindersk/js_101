//  algo:
//  - iterate over the words in the input array
//  - in each iteration compare the word with the input
//    word
//  - for comparison
//    - sort the input word's letters and to be checked word's letters
//    - compare the two sorted strings

function anagrams(word, words) {
  word = word.split('').sort().join('');

  return words.filter(text => text.split('').sort().join('') === word);
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // ['aabb', 'bbaa']