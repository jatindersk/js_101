//  declare a variable alphabets = 'abcdefghijklmnopqrstuvwxyz'
//  iterate over the words and count the total of all the letters
//  return the word and its score as an array to form a 2D array
//  sort the words in descending order of the scores

function high(str) {
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';

  let wordCount = str.split(' ').map(word => {
    let count =
      word.split('').reduce((count, letter) => {
        count += alphabets.indexOf(letter) + 1;
        return count;
      }, 0);
    return [word, count];
  });
  return wordCount.sort((a, b) => b[1] - a[1])[0][0];
}

console.log(high('man i need a taxi up to ubud')); // 'taxi'
console.log(high('what time are we climbing up the volcano')); // 'volcano'
console.log(high('take me to semynak')); // 'semynak'
console.log(high('aa b')); // 'aa'
console.log(high('b aa')); // 'b'
console.log(high('bb d')); // 'bb'
console.log(high('d bb')); // 'd'
console.log(high('aaa b')); // 'aaa'