let randomAge = _ => {
  let age = Math.floor(Math.random() * (120 - 20 + 1)) + 20;
  console.log(`Teddy is ${age} old!`);
};

randomAge();

// Teddy is 69 years old!