function isPangram(string) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

  return alphabets.split('').every(letter => string.toLowerCase().includes(letter));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("This is not a pangram.")); // false