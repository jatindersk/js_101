//  words should be of same length
//  sort the input string
//  sort each word in the input array
//  compare each character from the input string to each
//  - character from every word in the array

function anagrams(word, words) {
  let result = [];
  word = word.split('').sort().join('');
  let wordsCopy = words.slice().map(word => word.split('').sort().join(''));
  // console.log(`string: ${word}:: array ${words}`);
  wordsCopy.filter((el, idx) => {
    if (el === word) {
      result.push(...words.slice(idx, idx + 1));
      return true;
    }
    return false;
  });
  return result;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])); // => []