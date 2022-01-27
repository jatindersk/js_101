// input: string, output: object
//  algorithm:
//  - find the total length of the string
//  - find the number of non letter characters
//  - find the number of lowercase letters
//  - find the number of uppercase letters by subtracting
//  the other two types from the string length

let letterPercentages = str => {
  let result = {};
  let length = str.length;
  let lowerCaseNum = 0;
  let upperCaseNum = 0;
  for (let idx = 0; idx < length; idx += 1) {
    let char = str[idx];
    if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
      if (char === char.toLowerCase()) {
        lowerCaseNum += 1;
      } else upperCaseNum += 1;
    }
  }
  let nonLetter = length - (lowerCaseNum + upperCaseNum);
  result['lowercase'] = ((lowerCaseNum / length) * 100).toFixed(2);
  result['uppercase'] = ((upperCaseNum / length) * 100).toFixed(2);
  result['neither'] = ((nonLetter / length) * 100).toFixed(2);
  return result;
};

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }