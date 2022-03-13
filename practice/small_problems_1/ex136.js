let isPP = num => {
  for (let divisor = 2; divisor * divisor <= num; divisor += 1) {
    for (let power = 2; Math.pow(divisor, power) <= num; power += 1) {
      if (Math.pow(divisor, power) === num) return [divisor, power];
    }
  }
  return null;
};

console.log(isPP(4)); // "4 = 2^2"
console.log(isPP(9)); // "9 = 3^2"
console.log(isPP(81)); // "81 = 3^4"
console.log(isPP(5)); // null


// let isPP = function (num) {
//   let divisor = 1;
//   while (true) {
//     divisor += 1;
//     if (divisor === num) return null;

//     if (num % divisor === 0) {
//       let quotient = num / divisor;
//       console.log(`num is ${num}`);
//       return [divisor, countPower(divisor, quotient)];
//     }
//   }
// };

// function countPower(num, quotient) { // 27
//   console.log(`num is ${num}:: quotient is ${quotient}`);
//   let count = 1;
//   while (quotient > 1) {
//     quotient /= num;
//     count += 1;
//   }
//   return count;
// }