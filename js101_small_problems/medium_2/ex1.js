function calcPercentage(obj, str, strLength) {
  for (let idx = 0; idx < strLength; idx += 1) {
    if (str[idx] >= 'a' && str[idx] <= 'z') {
      obj['lowercase'] = obj['lowercase'] || 0;
      obj['lowercase'] += 1;
    } else if (str[idx] >= 'A' && str[idx] <= 'Z') {
      obj['uppercase'] = obj['uppercase'] || 0;
      obj['uppercase'] += 1;
    } else {
      obj['neither'] = obj['neither'] || 0;
      obj['neither'] += 1;
    }
  }
  return obj;
}

let letterPercentages = str => {
  let strLength = str.length;
  let result = { lowercase: 0, uppercase: 0, neither: 0 };

  result = calcPercentage(result, str, strLength);

  let totalChar = Object.values(result).reduce((total, val) => total + val, 0);
  for (let key in result) {
    result[key] = ((result[key] / totalChar) * 100).toFixed(2);
  }
  return result;
};

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }