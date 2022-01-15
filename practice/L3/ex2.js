let munstersDescription = "The Munsters are creepy and spooky.";

let transformedStr = munstersDescription
  .split('')
  .map(char => (char >= 'a' && char <= 'z') ? char.toUpperCase() : char.toLowerCase())
  .join('');

  console.log(transformedStr);