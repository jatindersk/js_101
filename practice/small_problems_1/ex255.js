let letterCaseCount = str => {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    if (char.toLowerCase() === char.toUpperCase()) {
      result.neither += 1;
      continue;
    }

    if (char === char.toLowerCase()) result.lowercase += 1;
    else if (char === char.toUpperCase()) result.uppercase += 1;
  }

  return result;
};

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }