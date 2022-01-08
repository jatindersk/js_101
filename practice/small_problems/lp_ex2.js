// algorithm:
//  - initiate a variable 'numWords' to an object containing
//  the word corresponding to each integer from input array
//  - use map method to transform the elements of input array
//  to the corresponding word
//  - sort the array output by map using sort method
//  - transform the output array of sort method using the 'numWords'
//  object

let alphabeticNumberSort = arr => {
  // let numWords = {
  //   0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  //   6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
  //   13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
  //   18: 'eighteen', 19: 'nineteen'
  // };

  let numWordsArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];

  let transformed = arr.map(num => numWordsArr[num]);
  transformed.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  return transformed.map(word => numWordsArr.indexOf(word));
};

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]