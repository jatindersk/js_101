//  extract the letter at nth position in each word
//  concatenate the extracted letters and return the word

function nthChar(words) {
  return words.map((word, idx) => word[idx]).join('');
}

console.log(nthChar([])); // ''
console.log(nthChar(['yoda', 'best', 'has'])); // 'yes'