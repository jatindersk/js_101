let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let total = Object.values(ages).reduce((acc, el) => acc + el, 0);
console.log(total);