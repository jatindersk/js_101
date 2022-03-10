function triangle(angle1, angle2, angle3) {
  if (isValidTriangle(angle1, angle2, angle3)) {
    return typeOfTriangle(angle1, angle2, angle3);
  } else return 'invalid';
}

function typeOfTriangle(angle1, angle2, angle3) {
  if (angle1 === 90 || angle2 === 90 || angle3 === 90) return 'right';
  else if (angle1 < 90 && angle2 < 90 && angle3 < 90) return 'acute';
  else return 'obtuse';
}

function isValidTriangle(angle1, angle2, angle3) {
  if ((angle1 + angle2 + angle3) !== 180) return false;
  return angle1 && angle2 && angle3;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"