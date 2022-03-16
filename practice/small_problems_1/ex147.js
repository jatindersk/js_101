function letterCount(string) {
  let result = {};
  string.split('').forEach(char => {
    result[char] = result[char] || 0;
    result[char] += 1;
  });

  return result;
}

console.log(letterCount("codewars")); // {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1}