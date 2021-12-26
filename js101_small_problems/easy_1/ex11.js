let utf16Value = str => {
  let utfValue = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    utfValue += str.charCodeAt(idx);
  }

  return utfValue;
};

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));

const OMEGA = "\u03A9";
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));