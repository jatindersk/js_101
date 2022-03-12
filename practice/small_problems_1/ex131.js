function isPangram(string) {
  let alphabets = {
    a: false, b: false, c: false, d: false, e: false, f: false, g: false,
    h: false, i: false, j: false, k: false, l: false, m: false, n: false,
    o: false, p: false, q: false, r: false, s: false, t: false, u: false,
    v: false, w: false, x: false, y: false, z: false
  };

  string.split('').forEach(char => {
    char = char.toLowerCase();
    if ((char >= 'a' && char <= 'z') && (!alphabets[char])) {
      alphabets[char] = true;
    }
  });

  return !Object.values(alphabets).includes(false);
}

let string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string)); // true

string = "This is not a pangram.";
console.log(isPangram(string)); // false

