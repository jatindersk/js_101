let integerToString = num => {
  if (num === 0) console.log('0');

  const NUMSTR = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  // while (num > 0) {
  //   result = (num % 10) + result;
  //   num -= num % 10;
  //   num /= 10;
  //   // console.log(num);
  // }

  while (num > 0) {
    result = NUMSTR[num % 10] + result;
    num -= num % 10;
    num /= 10;
  }
  console.log(result);
};

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"