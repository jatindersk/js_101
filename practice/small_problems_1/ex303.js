// input: names - unsorted strings
// output: case-agnostic sort

//  algo:
//  - call sort method on the input array
//  - ignore the case of each string while sorting
//  - return the sorted array

let sortme = arr => {
  return arr.sort(sortStrings);
};

function sortStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
}

console.log(sortme(["Hello","there","I'm","fine"])); // ["fine", "Hello", "I'm", "there"]
console.log(sortme(["C", "d", "a", "B"])); // ["a", "B", "C", "d"
console.log(sortme(["CodeWars"])); // ["CodeWars"]
console.log(sortme([])); // []