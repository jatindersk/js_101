let returnRandomAge = _ => {
  return Math.floor(Math.random() * 121);
};

let randomAge;

do {
  randomAge = returnRandomAge();
} while (!(randomAge >= 20) && (randomAge <= 120));

console.log(`Teddy is ${randomAge} years old!`);