//  input: number, output: string
//  algorithm:
//  - use Math.max to determine the largest input length
//  - check whether two other sides total is greater than max side
//  - return invalid if any of the side's length is 0
//  - check whether other two side are of equal length
//  - check whether all three sides are of equal length
//  - if above two are false, then return 'Scalene'

let triangle = (side1, side2, side3) => {
  let largest = Math.max(side1, side2, side3);
  let perimeter = side1 + side2 + side3;
  if (!(perimeter - largest > largest)) return 'invalid';

  if (side1 && side2 && side3) {
    if (side1 === side2 && side2 === side3) return 'equilateral';
    else if (side1 === side2 && side1 !== side3) return 'isosceles';
    else return 'scalene';
  }
  return 'invalid';
};

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"