//  find all the substring that are equal to length 5
//  find their product
//  find the greatest product among them and return

function greatestProduct(input) {
  let result = [];

  for (let start = 0; start < input.length; start += 1) {
    let subStr = input.slice(start, start + 5);
    if (subStr.length === 5) result.push(subStr);
  }
  result = findProduct(result);
  return Math.max(...result);
}

function findProduct(result) {
  return result.map(numStr => {
    return numStr.split('').reduce((prod, num) => prod * num , 1);
  });
}

console.log(greatestProduct("123834539327238239583")); // 3240, 'The method gave a wrong answer'
console.log(greatestProduct("92494737828244222221111111532909999")); // 5292, 'The method gave a wrong answer'
// console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
// console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
// console.log(greatestProduct("02494037820244202221011110532909999")); // 0