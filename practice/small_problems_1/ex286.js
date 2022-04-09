//  input: objects, output : number
//  algo:
//  - keep iterating over the recipe object properties
//  - on each iteration subtract the value of recipe properties
//    from their counterparts in available object properties
//  - if the value of avaialble object properties drop to 0 or below
//    break the iteration
//  - if not then increase the counter variable's value

function cakes(recipe, available) {
  let counter = 0;

  while (true) {
    for (let key in recipe) {
      if (available[key] === undefined) return counter;
      available[key] -= recipe[key];
    }
    if (Object.values(available).some(val => val < 0)) break;
    counter += 1;
  }

  return counter;
}

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));   //  2

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
  {sugar: 500, flour: 2000, milk: 2000}));    //  0