let lightsOn = count => {
  let switches = {};
  for (let idx = 1; idx <= count; idx += 1) {
    switches[idx] = false;
  }

  let pass = 1;
  while (pass <= count) {
    for (let key = 1; key <= count; key += 1) {
      if (key % pass === 0) {
        switches[key] = !switches[key];
      }
    }
    pass += 1;
  }
  return Object.keys(switches)
    .filter(key => switches[key]);
};

console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(100));  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]