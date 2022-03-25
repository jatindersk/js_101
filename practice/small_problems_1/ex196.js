//  - find the height of the rebounding ball

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;
  let seen = 0;

  while (h > window) {
    seen += 1;
    h *= bounce;
    console.log(`h is ${h}`);
    if (h > window) seen += 1;
  }

  return seen;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
console.log(bouncingBall(3.0, 1.0, 1.5)); // -1