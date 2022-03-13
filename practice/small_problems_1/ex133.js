function firstNonRepeatingLetter(s) {
  if (s.length === 1) return s;
  let strArr = s.split('');

  for (let idx = 0; idx < strArr.length; idx += 1) {
    let subArr = strArr.slice(0, idx).concat(strArr.slice(idx + 1))
      .map(char => char.toLowerCase());
    if (!subArr.includes(strArr[idx].toLowerCase())) {
      return strArr[idx];
    }
  }

  return '';
}

console.log(firstNonRepeatingLetter('a')); // 'a'
console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('moonmen')); // 'e'
console.log(firstNonRepeatingLetter('Tsrree')); // 'T'