// algorithm:
//  - split the string to an array of words
//  - define a new variable 'result' and initiate it to an empty object
//  - iterate through the array of words and compute the length of each word
//  - If the computed length already exists in the object as key, then increment
//    its value by 1
//  Otherwise, create a new key in 'result' object and initiate it to a value
//  of 0. Incremenet it by 1 in the next step

let wordSizes = str => {
  let strArr = str.split(' ');
  console.log(strArr);
  let result = {};

  if (str === '') return result;

  strArr.forEach(word => {
    let key = word.length;
    if (word.length !== 0) {
      result[key] = result[key] || 0;
      result[key] += 1;
    }
  });
  return result;
};

console.log(wordSizes('Four score and seven. '));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}