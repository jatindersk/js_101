//  input: numbers, output: number
//  rules:
//  - the ball is seen atleat once
//  - presuming the window's height from the ground
//    is upto the top edge of the window and not the
//    bottom edge
//  - as it is the above case the ball will be seen
//    twice passing through the window (once going up)
//    and (once going down)

//  algo:
//  - use a guard clause to handle invalid arguments
//  - declare a counter variable = 1
//  - use a loop to keep track of the new total height
//    of the ball
//  - new height will be bounce (2/3rd) * height
//  - after new height is calculated check whether it is
//    lower than the window height
//  - if the new height is lower than the window height then
//    break
//  - if the new height is greater than the window height then
//    incremenet the counter by 2

function bouncingBall(height, bounce, window) {
  if (invalidArgument(height, bounce, window)) return -1;
  let counter = 1;

  while (true) {
    height *= bounce;
    if (height <= window) break;
    counter += 2;
  }
  return counter;
}

function invalidArgument(height, bounce, window) {
  return height <= 0 || (bounce <= 0 || bounce >= 1) || window >= height;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
console.log(bouncingBall(3.0, 1.0, 1.5)); // -1