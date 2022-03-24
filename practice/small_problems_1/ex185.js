// input: names - unsorted strings
// output: case-agnostic sort
let sortme = function(names) {
//  return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return names.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
};

console.log(sortme(["Hello","there","I'm","fine"])); // ["fine", "Hello", "I'm", "there"]
console.log(sortme(["C", "d", "a", "B"])); // ["a", "B", "C", "d"
console.log(sortme(["CodeWars"])); // ["CodeWars"]
console.log(sortme([])); // []