//  declare a count variable and initalize it to 0
//  declare an alphabet variable and initialize it to a string from a to z
//  iterate over the input string
//  if the current index of the letter is equal to it's index in alphabet string
//    increment the count variable by 1
//  else do nothing
//  After iterating over the string, push the value of count to a result array
//    and set the count variable to 0

function solve(arr) {
  let count = 0;
  let result = [];
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';

  arr.forEach(str => {
    str.split('').forEach((letter, idx) => {
      letter = letter.toLowerCase();
      if (idx === alphabets.indexOf(letter)) count += 1;
    });
    result.push(count);
    count = 0;
  });

  return result;
}

console.log(solve(["abode","ABc","xyzD"])); // = [4, 3, 1]