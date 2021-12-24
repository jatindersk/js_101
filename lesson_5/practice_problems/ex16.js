let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// Approach 1:
console.log(Object.fromEntries(arr));

// Approach 2:
let desiredObj = {};

arr.forEach(subArr => {
  desiredObj[subArr[0]] = subArr[1];
});
console.log(desiredObj);