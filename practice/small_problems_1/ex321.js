let triangle = (angle1, angle2, angle3) => {
  let max = Math.max(angle1, angle2, angle3);
  let min = Math.min(angle1, angle2, angle3);
  let middle = (angle1 + angle2 + angle3) - (max + min);

  if (isInvalidTriangle(min, middle, max)) return 'invalid';
  else return getTriangleType(max);
};

function getTriangleType(max) {
  if (max < 90) return 'acute';
  else if (max > 90) return 'obtuse';
  else return 'right';
}

function isInvalidTriangle(min, middle, max) {
  return min <= 0 || (min + middle + max !== 180);
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"