//  create an object of switches from 1 to n with boolean false as property
//  iterate until you reach switches value
//  on each iteration toggle the keys which are multiple of current index number
//  return the property keys for which value is true at end of iteration

function lightsOn(switches) {
  let obj = {};
  let count = 1;

  while (count <= switches) {
    obj[count] = false;
    count += 1;
  }

  for (let idx = 1; idx <= switches; idx += 1) {
    for (let key in obj) {
      if (Number(key) % idx === 0) obj[key] = !obj[key];
    }
  }
  return Object.keys(obj).filter(key => obj[key]).map(key => Number(key));
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]