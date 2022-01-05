function range(start, end) {
  let range = [];
  if (end === undefined) {
    end = start;
    start = 0;
  }
  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));

// The range error occurs because a function with same name has been defined
// on line 16.