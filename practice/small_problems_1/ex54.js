let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let idx = 0; idx < cities.length; idx += 1) {
  if (cities[idx] === null) continue;
  console.log(cities[idx].length);
}