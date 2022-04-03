//  find the side of maximum and minimum lengths
//  find the third side
//  verify the validity of triangle
//  verify the type of triangle

let triangle = (side1, side2, side3) => {
  let maxSide = Math.max(side1, side2, side3);
  let minSide = Math.min(side1, side2, side3);
  let secondSide = (side1 + side2 + side3) - (maxSide + minSide);

  if (isInvalid(maxSide, minSide, secondSide)) return 'invalid';

  return classifyTriangle(maxSide, secondSide, minSide);
};

function classifyTriangle(maxSide, secondSide, minSide) {
  if (maxSide === minSide && minSide === secondSide) return 'equilateral';
  else if ((maxSide === secondSide && maxSide !== minSide) || (secondSide === minSide && minSide !== maxSide)) return 'isosceles';
  else return 'scalene';
}

function isInvalid(maxSide, minSide, secondSide) {
  if (maxSide === 0 || minSide === 0 || secondSide === 0) return true;
  return minSide + secondSide < maxSide;
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"