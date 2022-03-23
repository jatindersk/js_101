//  decalre a counter variable = 0
//  iterate over the available ingredients
//  subtract the required ingredients quantity from the
//    available quantity and increase the counter by 1
//  check whether any quantity in available object has fallen
//    below zero then return the counter value
//  if not then keep decreasing the quantities from available

function cakes(recipe, available) {
  let counter = 0;
  if (!Object.keys(recipe).every(el => Object.keys(available).includes(el))) {
    return counter;
  }

  while (true) {
    for (let key in available) {
      available[key] -= recipe[key];
    }
    if (noIngredientsLeft(available)) break;
    counter += 1;
  }
  return counter;
}

function noIngredientsLeft(available) {
  return Object.values(available).some(quant => quant < 0);
}

// must return 2
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 })); // 2

// must return 0
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  { sugar: 500, flour: 2000, milk: 2000 })); // 0