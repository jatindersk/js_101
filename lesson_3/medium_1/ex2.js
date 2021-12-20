let munstersDescription = "The Munsters are creepy and spooky.";

let flipped = munstersDescription.split('').map(str => {
  return (str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase());
}).join('');

console.log(flipped);