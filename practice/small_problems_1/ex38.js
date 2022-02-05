//  input: string, output: object
//  algorithm:
//  - initiate an empty object
//  - convert the string into an array of words
//  - iterate through above array

function wordSizes(str) {
  let result = {};
  if (str.length === 0) return result;

  str.split(' ').forEach(word => {
    let length = word.length;
    result[length] = result[length] || 0;
    result[length] += 1;
  });
  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}