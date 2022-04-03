let letterPercentages = str => {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };
  let len = str.length;

  str.split('').forEach(char => {
    if (char.toLowerCase() === char.toUpperCase()) obj.neither += 1;
    else if (char === char.toLowerCase()) obj.lowercase += 1;
    else obj.uppercase += 1;
  });

  for (let key in obj) {
    obj[key] = ((obj[key] / len) * 100).toFixed(2);
    obj[key] = String(obj[key]);
  }

  console.log(obj);
};

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }