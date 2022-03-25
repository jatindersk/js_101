//  - declare a counter variable = 0;
//  - iterate over the input number
//  - when encountered a new number set the counter to 1
//  - then increase the counter by 1 if next number is same as
//    previous number
//  - if it's different then set the counter to 1
//  - repeat the above two steps until counter value is 3
//  - if the counter value is 3 then switch to check second input number

function tripledouble(num1, num2) {
  let counter = 0;
  let troubleNum;
  num1 = String(num1);
  num2 = String(num2);

  troubleNum = returnTriplet(num1, counter);
  if (troubleNum === false) return 0;

  return checkDoubles(num2, troubleNum, counter);
}

function checkDoubles(num2, troubleNum, counter) {
  let result;
  for (let outer = 0; outer < troubleNum.length; outer += 1) {
    for (let idx = 0; idx < num2.length; idx += 1) {
      let num = num2[idx];
      if (num === troubleNum[outer]) counter += 1;
      else counter = 0;
      if (counter === 2) return 1;
      else if (idx === num2.length) break;
    }
    counter = 0;
  }
  result = 0;
  return result;

}

function returnTriplet(num1, counter) {
  let triplets = [];

  for (let idx = 0; idx < num1.length; idx += 1) {
    let num = num1[idx];
    if (num === num1[idx - 1]) counter += 1;
    else counter = 1;
    if (counter === 3) triplets.push(num);
  }
  if (triplets.length === 0) return false;
  else return triplets;
}

console.log(tripledouble(44184928999888, 5911376488)); // 1

console.log(tripledouble(12345, 12345)); // 0
console.log(tripledouble(451999277, 41177722899)); // 1
console.log(tripledouble(1222345, 12345)); // 0

console.log(tripledouble(666789, 12345667)); // 1
console.log(tripledouble(10560002, 100)); // 1
console.log(tripledouble(1112, 122)); // 0