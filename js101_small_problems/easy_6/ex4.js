let centerOf = str => {
  let strlength = str.length;

  if (strlength % 2 === 1) {
    return str[Math.floor(strlength / 2)];
  }

  return str[(strlength / 2) - 1] + str[strlength / 2];
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"