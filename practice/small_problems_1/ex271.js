let triangle = (angle1, angle2, angle3) => {
  let max = Math.max(angle1, angle2, angle3);
  let min = Math.min(angle1, angle2, angle3);
  let second = (angle1 + angle2 + angle3) - (max + min);

  if (!isValid(max, min, second)) return 'invalid';

  return getTriangleType(max, min, second);
};

function getTriangleType(max, min, second) {
  if (max === 90 || min === 90 || second === 90) return 'right';
  else if (max < 90) return 'acute';
  else return 'obtuse';
}

function isValid(max, min, second) {
  return min > 0 && max + second + min === 180;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"