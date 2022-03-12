// complete the function
function solution(string) {
  let result = [];
  let upperCaseIdx = 0;
  let charArr = string.split('');
  for (let idx = 0; idx < charArr.length; idx += 1) {

    if (charArr[idx] === charArr[idx].toUpperCase()) {
      result.push(charArr.slice(upperCaseIdx, idx).join(''));
      upperCaseIdx = idx;
    } else if (idx === charArr.length - 1) {
      result.push(charArr.slice(upperCaseIdx).join(''));
    }
  }
  return result.join(' ');
}

console.log(solution('camelCasing')); // 'camel Casing'
console.log(solution('camelCasingTest')); // 'camel Casing Test'
console.log(solution('identifier')); // 'identifier'