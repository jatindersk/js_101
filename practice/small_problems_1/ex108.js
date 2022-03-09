function letterPercentages(str) {
  let resultObj = { lowerCase: 0, upperCase: 0, neither: 0 };

  str.split('').forEach(char => {
    if (isUpperCase(char)) resultObj['upperCase'] += 1;
    else if (isLowerCase(char)) resultObj['lowerCase'] += 1;
    else resultObj['neither'] += 1;
  });

  calculatePercentage(resultObj, str.length);
  return resultObj;
}

function calculatePercentage(resultObj, stringLength) {
  for (let key in resultObj) {
    resultObj[key] = (resultObj[key] / stringLength) * 100;
    resultObj[key] = String(resultObj[key].toFixed(2));
  }
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}

function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }