//  - iterate over the words in the string
//  - uppercase every even indexed character in the word
//  - lowercase every odd indexed character in the word

function toWeirdCase(string) {

  return string.split(' ').map(changeCase).join(' ');
}

function changeCase(word) {
  return word.split('').map((char, idx) => {
    if (idx % 2 === 0) return char.toUpperCase();
    else return char.toLowerCase();
  }).join('');
}

console.log(toWeirdCase('This')); // 'ThIs'
console.log(toWeirdCase('is')); // 'Is'
console.log(toWeirdCase('This is a test')); // 'ThIs Is A TeSt'