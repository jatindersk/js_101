//  input: string, output: string

//  algo:
//  - declare a variable temp = [];
//  - extract the words of the input string and remove any empty string chars
//  - iterate over the words and increment the index by 2 in each iteration

//  - in each iteration, reverse the current and next words, concatenate
//    them and push the resulting string to temp array
//  - if the next word is undefined just reverse the current word and push
//    it to temp array
//  - after the iteration has finished push the contents of temp to original
//    words array and reassign the temp to an empty array
//  - keep iterating over the words until there is one word left
//  - return the word

function reverse_and_combine_text(str) {
  let temp = [];
  let wordsArr = str.split(' ').filter(char => char !== '');

  wordsArr = reverseAndMerge(wordsArr, temp);
  return wordsArr[0];
}

function reverseAndMerge(wordsArr, temp) {
  let current;
  let next;

  while (wordsArr.length > 1) {
    for (let idx = 0; idx < wordsArr.length; idx += 2) {
      current = wordsArr[idx];
      next = wordsArr[idx + 1];
      current = current.split('').reverse().join('');

      if (next === undefined) {
        temp.push(current);
      } else {
        next = next.split('').reverse().join('');
        temp.push(current + next);
      }
    }
    wordsArr = temp.slice(0);
    temp = [];
  }
  return wordsArr;
}

console.log(reverse_and_combine_text("abc def")); // "cbafed"
console.log(reverse_and_combine_text("abc def ghi jkl")); // "defabcjklghi"
console.log(reverse_and_combine_text("dfghrtcbafed")); // "dfghrtcbafed"
console.log(reverse_and_combine_text("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44") === "trzwqfdstrteettr45hh4325543544hjhjh21lllll"); // "trzwqfdstrteettr45hh4325543544hjhjh21lllll"
console.log(reverse_and_combine_text("sdfsdf wee sdffg 342234 ftt")); // "gffds432243fdsfdseewttf"