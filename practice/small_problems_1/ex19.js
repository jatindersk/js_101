function isValidTriangle(smallest, sum) {
  // console.log(`smallest: ${smallest}::: sum: ${sum}`);
  return smallest > 0 && sum === 180;
}

function triangle(angle1, angle2, angle3) {
  let sum = angle1 + angle2 + angle3;
  let largest = Math.max(angle1, angle2, angle3);
  let smallest = Math.min(angle1, angle2, angle3);
  // console.log(`smallest: ${smallest}::: largest: ${largest}`);

  if (isValidTriangle(smallest, sum)) {
    if (largest === 90) return 'right';
    else if (largest > 90) return 'obtuse';
    else return 'acute';
  }
  return 'invalid';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"