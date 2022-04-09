//  input: array, output: number

//  algo:
//  - declare a addedNum variable = 0;
//  - declare a generic loop
//  - inside the loop push the current value of
//    addedNum to the input array and find the sum
//  - check whether the sum is a prime number
//  - if it is a prime number then break and return the
//    addedNum value
//  - if it is not a prime number then pop the last added value
//    from the input array
//  - increment the addedNum's value by 1 and push it to input array
//  - keep repeating the loop until sum is a prime number

//  isPrime function algo:
//  - a prime number is a number which is divisible by itself and 1 only
//  - declare a divisor variable = 2
//  - loop from divisor's value = 2 upto sum's value
//  - in each iteration of loop check whether the current
//    value of divisor is evenly divisible by sum's value
//  - if yes, then return false
//  - if no value from 2 upto 1 less than sum's value is evenly
//    divides sum's value then it means sum is a prime number
//  - return true if above happens

function minimumNumber(numbers) {
  let addedNum = 0;
  let sum;

  while (true) {
    numbers.push(addedNum);
    sum = numbers.reduce((sum, num) => sum + num);

    if (isPrime(sum)) break;
    numbers.pop();
    addedNum += 1;
  }
  return addedNum;
}

function isPrime(sum) {
  let divisor = 2;

  while (divisor < sum) {
    if (sum % divisor === 0) return false;
    divisor += 1;
  }
  return true;
}

console.log(minimumNumber([3,1,2])); // 1
console.log(minimumNumber([5,2])); // 0
console.log(minimumNumber([1,1,1])); // 0
console.log(minimumNumber([2,12,8,4,6])); // 5
console.log(minimumNumber([50,39,49,6,17,28])); // 2