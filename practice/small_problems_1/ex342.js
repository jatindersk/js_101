function letterCaseCount(str) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };

  str.split('').forEach(char => {
    if (char.toLowerCase() === char.toUpperCase()) result['neither'] += 1;
    else if (char === char.toLowerCase()) result['lowercase'] += 1;
    else result['uppercase'] += 1;
  });
  console.log(result);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }