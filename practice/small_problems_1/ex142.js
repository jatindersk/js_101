//  input: object, output: number
//  - declare and initialize a variable cakeCount to 0
//  - all key/value pairs in recipe should exist in ingredients object
//    if not then, return 0
//  - if yes, then reduce the value of properties in ingredients object
//    and increment cakeCount by 1
//  - if the value go below the threshold specified in the recipe object
//    then return the current cakeCount value

function cakes(recipe, available) {
  let cakeCount = 0;
  let recipes = Object.keys(recipe);
  let ingredients = Object.keys(available);
  if (!(recipes.every(item => ingredients.includes(item)))) return 0;

  while (true) {
    for (let item in recipe) {
      available[item] -= recipe[item];
    }
    if (!(Object.values(available).every(itemVal => itemVal >= 0))) {
      break;
    }
    cakeCount += 1;
  }
  return cakeCount;
}

// must return 1
console.log(cakes({ "cream": 1, "flour": 3, "sugar": 1, "milk": 1, "oil": 1, "eggs": 1 },
  { "sugar": 1, "eggs": 1, "flour": 3, "cream": 1, "oil": 1, "milk": 1 }));

// // must return 2
// console.log(cakes({ flour: 500, sugar: 200, eggs: 1 },
//   { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));

// // must return 0
// console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//   { sugar: 500, flour: 2000, milk: 2000 }));