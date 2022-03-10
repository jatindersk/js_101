//  create an object and store each switch as a property in it
//   - and set their values as false (off)
//  iterate through the object keys (switches) for n (switches) times
//  on first iteration, toggle the value of each property
//  on second iteration, toggle the value of properties that is a multiple
//   - of the current  iteration number

function lightsOn(switches) {
  let switchBank = {};

  creatSwitchBank(switchBank, switches);

  for (let count = 1; count <= switches; count += 1) {
    toggleSwitches(switchBank, count);
  }

  return Object.keys(switchBank)
    .filter(key => switchBank[key])
    .map(key => Number(key));
}

function creatSwitchBank(switchBank, count) {
  while (count > 0) {
    switchBank[count] = false;
    count -= 1;
  }
}

function toggleSwitches(switchBank, count) {
  for (let key in switchBank) {
    if (key % count === 0) {
      switchBank[key] = !switchBank[key];
    }
  }
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]