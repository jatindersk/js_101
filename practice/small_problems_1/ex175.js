//  find the word with bigger length
//    as it will become bigger
//  the other word will become smaller
//  if the smaller arr elements do not exist in bigger arr
//    then return the sum of length of both arrays
//  iterate over the smaller array, if the elements of smaller
//    exist then delete the element from larger arr
//  if the element from smaller arr do not exist in bigger arr
//    then do increase the counter by 1
//  at the end sum up the counter value and length of the larger arr
//    to get the result

function anagramDifference(w1, w2) {
  let count = 0;
  let smaller;
  let larger;

  if (w1.length < w2.length) {
    [smaller, larger] = [w1.split(''), w2.split('')];
  } else {
    [larger, smaller] = [w1.split(''), w2.split('')];
  }

  for (let idx = 0; idx < smaller.length; idx += 1) {
    if (larger.includes(smaller[idx])) {
      let index = larger.indexOf(smaller[idx]);
      larger.splice(index, 1);
    } else count += 1;
  }
  return count + larger.length;
}

console.log(anagramDifference("","")); // 0
console.log(anagramDifference("a","")); // 1
console.log(anagramDifference("", "a")); // 1
console.log(anagramDifference("ab","a")); // 1
console.log(anagramDifference("ab","cd")); // 4
console.log(anagramDifference("aab","a")); // 2
console.log(anagramDifference("a","aab")); // 2
console.log(anagramDifference("codewars","hackerrank")); // 10