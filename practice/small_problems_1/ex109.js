function triangle(side1, side2, side3) {
  if (!isValidTriangle(side1, side2, side3)) return 'invalid';
  if (side1 === side2 && side2 === side3) return 'equilateral';
  else if ((side1 === side2 && side2 !== side3) || (side1 !== side2 && side2 === side3) || (side1 === side3 && side2 !== side3)) return 'isosceles';
  else return 'scalene';
}

function isValidTriangle(side1, side2, side3) {
  if (!(side1 && side2 && side3)) return false;
  let longestSide = Math.max(side1, side2, side3);
  let smallestSide = Math.min(side1, side2, side3);
  let midSide = (side1 + side2 + side3) - longestSide - smallestSide;
  return (smallestSide + midSide) - longestSide > 0;
}

console.log(triangle(3, 4, 3));      // "isosceles"
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"