//  input: number, output: string
//  algo:
//  - comvert the input number into a number string
//  - declare a variable subStrings = [String(num)]
//  - the approach will be to define a function that
//    removes a single digit from the current substrings
//    of the number string
//  - the above function returns an array with updated
//    substrings (one digit removed)
//  - this array gets assigned to the subStrings variable
//  - keep calling the above function until count === 0
//  - in each iteration keep reducing the value of count by 1

function solve(num, count) {
  let subStrings = [String(num)];

  while (count > 0) {
    subStrings = removeDigit(subStrings);
    count -= 1;
  }

  subStrings.sort((a, b) => (+a) - (+b));
  return String(subStrings[0]);
}

function removeDigit(subStrings) {
  let result = [];

  subStrings.forEach(numStr => {
    for (let idx = 0; idx < numStr.length; idx += 1) {
      result.push(numStr.slice(0, idx) + numStr.slice(idx + 1));
    }
  });
  return result;
}

console.log(solve(123056,1)); // '12056'
console.log(solve(123056,2)); // '1056'
console.log(solve(123056,3)); // '056'
console.log(solve(123056,4)); //  '05'
console.log(solve(1284569,1)); // '124569'
console.log(solve(1284569,2)); // '12456'
console.log(solve(1284569,3)); // '1245'
console.log(solve(1284569,4)); // '124'