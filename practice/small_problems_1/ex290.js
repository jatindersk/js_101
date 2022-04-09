//  input: string, output: string
//  algo:
//  - declare a result variable and initiate it to []
//  - iterate over the input string
//  - push the current character into the result array
//  - if the current character is a '#' then pop one character from
//    the result variable

function cleanString(str) {
  let result = [];

  str.split('').forEach(char => {
    if (char === '#') result.pop();
    else result.push(char);
  });
  return result.join('');
}

console.log(cleanString('abc#d##c')); // 'ac'
console.log(cleanString('abc####d##c#')); // ''