[1, 2, 3].map(num => {
  num * num;
});

// [undefined, undefined, undefined]
// It returns an array of three elements where each element is undefined
// as the callback function always returns undefined for each element of
// the caller array. As the callback function is not returning anything
// explicity, and JavaScript functions implicity returns undefined.