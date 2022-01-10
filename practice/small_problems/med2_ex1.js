let letterPercentages = str => {
  let result = {};
  result['lowercase'] = percentOfLowercase(str);
  result['uppercase'] = percentOfUppercase(str);
  result['neither'] = ((100 - result['lowercase']) - result['uppercase']).toFixed(2);

  return result;
};

function percentOfLowercase(str) {
  let count = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] >= 'a' && str[idx] <= 'z') {
      count += 1;
    }
  }
  return ((count / str.length) * 100).toFixed(2);
}

function percentOfUppercase(str) {
  let count = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] >= 'A' && str[idx] <= 'Z') {
      count += 1;
    }
  }
  return ((count / str.length) * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }