let triangle = (angle1, angle2, angle3) => {
  let maxAngle = Math.max(angle1, angle2, angle3);
  let minAngle = Math.min(angle1, angle2, angle3);
  let midAngle = (angle1 + angle2 + angle3) - (maxAngle + minAngle);

  if (isValid(maxAngle, midAngle, minAngle)) {
    return classifyTriangle(maxAngle, midAngle, minAngle);
  }

  return 'invalid';
};

function isValid(maxAngle, midAngle, minAngle) {

  return (minAngle > 0 && (maxAngle + midAngle + minAngle) === 180);
}

function classifyTriangle(maxAngle) {
  if (maxAngle === 90) return 'right';
  else if (maxAngle < 90) return 'acute';
  else if (maxAngle > 90) return 'obtuse';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"