let letterPercentages = str => {
  let charArr = str.split('');
  let result = { lowercase: 0, uppercase: 0, neither: 0 };

  charArr.forEach(char => {
    if (char.toLowerCase() === char.toUpperCase()) result['neither'] += 1;
    else if (char === char.toLowerCase()) result['lowercase'] += 1;
    else result['uppercase'] += 1;
  });

  for (let key in result) {
    let percentage = (result[key] / str.length) * 100;
    result[key] = percentage.toFixed(2);
  }

  return result;
};

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }