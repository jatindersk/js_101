let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
{ id: 105, movement: 'in',  quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in',  quantity: 12 },
{ id: 103, movement: 'out', quantity: 20 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in',  quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in',  quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 }, ];

let transactionsFor = (item, list) => list.filter(transaction =>
  transaction['id'] === item);

let isItemAvailable = (itemID, list) => {
  let transactions = transactionsFor(itemID, list);

  let totalIn = 0;
  let totalOut = 0;

  transactions.forEach(obj => {
    if (obj.movement === 'in') {
      totalIn += obj.quantity;
    } else if (obj.movement === 'out') {
      totalOut += obj.quantity;
    }
  });

  return (totalIn - totalOut) > 0;
};

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true