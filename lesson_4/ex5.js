[1, 2, 3].every(num => {
  return num = num * 2;
});

// callback's return value : 2, 4, 6
// every returns boolean value true
// as the callback function returns a
// truthy value for each element of the
// calling array