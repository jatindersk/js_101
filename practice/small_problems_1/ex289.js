//  algo:
//  - filter out the non letter charcaters from the string
//  - replace the letter with it's position in alphabet order

function alphabetPosition(text) {
  const ALPHABETS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  text = text.split('').filter(char => {
    return char.toLowerCase() !== char.toUpperCase();
  });

  text = text.map(letter => ALPHABETS.indexOf(letter.toLowerCase()) + 1);
  return text.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )