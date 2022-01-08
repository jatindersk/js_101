// algorithm:
// - select those objects from transactions array that match
//  the input id. Let's call this array 'matchingTran'
// - iterate through 'matchingTran' array and check the value
//  of movement property. Declare a variable called 'result' = 0
// - if the value if 'in' then access the value of quantity prop
//  and add it to 'result', if it is 'out', then decrease the
//  value of quantity prop from 'result'
// - return the result of result > 0

let isItemAvailable = (item, list) => {
  let matchingTran = returnTransactions(item, list);
  //let result = 0;

  return matchingTran.reduce(computeResult, 0) > 0;
  //  return computeResult(matchingTran, result) > 0;
};

// function computeResult(matchingTran, result) {
//   matchingTran.forEach(obj => {
//     if (obj['movement'] === 'in') {
//       result += obj['quantity'];
//     } else if (obj['movement'] === 'out') {
//       result -= obj['quantity'];
//     }
//   });
//   console.log(result);
//   return result;
// }

function computeResult(result, obj) {
  if (obj['movement'] === 'in') {
    result += obj['quantity'];
  } else if (obj['movement'] === 'out') {
    result -= obj['quantity'];
  }
  return result;
}

function returnTransactions(item, list) {
  return list.filter(obj => obj['id'] === item);
}

let transactions = [{ id: 101, movement: 'in', quantity: 5 },
{ id: 105, movement: 'in', quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in', quantity: 12 },
{ id: 103, movement: 'out', quantity: 20 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in', quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in', quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 },];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true