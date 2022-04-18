let crunch = str => {
  let result = '';

  str.split('').forEach(char => {
    if (result[result.length - 1] !== char) result += char;
  });

  console.log(result);
};

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""