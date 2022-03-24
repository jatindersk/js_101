//  - iterate over the input string and create a new property
//    for each character in the string with it's occurance as a value
//  - iterate over the key value pairs of the object
//  - if the value is greater than 1 then increase the count by 1
//  - return the count

function duplicateCount(text) {
  text = text.toLowerCase();
  let obj = {};

  text.split('').forEach(char => {
    obj[char] = obj[char] || 0;
    obj[char] += 1;
  });

  return Object.entries(obj)
    .reduce((count, el) => {
      if (el[1] > 1) {
        count += 1;
        return count;
      } else return count;
    }, 0);
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2, "should ignore case"
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2, "characters may not be adjacent"