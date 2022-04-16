function triangle(side1, side2, side3) {
  let longest = Math.max(side1, side2, side3);
  let shortest = Math.min(side1, side2, side3);
  let middle = (side1 + side2 + side3) - (longest + shortest);

  if (isInvalid(shortest, middle, longest)) return 'invalid';
  else return triangleType(shortest, middle, longest);
}

function triangleType(shortest, middle, longest) {
  if (shortest === middle && middle === longest) return 'equilateral';
  else if (shortest !== middle && middle !== longest) return 'scalene';
  else return 'isosceles';
}

function isInvalid(shortest, middle, longest) {
  return shortest <= 0 || (middle + shortest) <= longest;
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"