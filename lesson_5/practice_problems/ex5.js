let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalMaleAge = 0;

let valuesArr = Object.values(munsters);
valuesArr.forEach(el => {
  if (el.gender === "male") {
    totalMaleAge += el.age;
  }
});

console.log(totalMaleAge);