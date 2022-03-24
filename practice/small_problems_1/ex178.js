function wave(str) {
  let result = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    if (char === ' ') continue;
    result.push(str.slice(0, idx) + str[idx].toUpperCase() +
      str.slice(idx + 1));
  }
  return result;
}

console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("codewars")); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave("")); // []
console.log(wave("two words")); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave(" gap ")); // result, "Should return: '"+result+"'"