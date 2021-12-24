let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Approach 1:
// for (let key in munsters) {
//   console.log(`${key} is a ${munsters[key].age}-year-old ${munsters[key].gender}`); // (Name) is a (age)-year-old (male or female).
// }

// Approach 2:
Object.entries(munsters).forEach(arr => {
  console.log(`${arr[0]} is a ${arr[1].age}-year-old ${arr[1].gender}`);
});

