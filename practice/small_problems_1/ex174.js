function solution(str) {
  let result = [];
  if (str.length === '') return result;

  for (let idx = 0; idx < str.length; idx += 2) {
    result.push(str.slice(idx, idx + 2));
  }

  if (str.length % 2 === 1) {
    result[result.length - 1] = result[result.length - 1] + '_';
    return result;
  }
  return result;
}

console.log(solution("abcdef")); // ["ab", "cd", "ef"]
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(solution("")); // []