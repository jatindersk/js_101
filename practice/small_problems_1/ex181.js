//  - iterate over the words
//  - split the word and switch the case to it's opposite and then
//    form the word back
//  - reverse the string and return

function stringTransformer(str) {
  let wordArr = str.split(' ');

  return wordArr.map(word => {
    return word.split('').map(char => {
      if (char === char.toLowerCase()) return char.toUpperCase();
      else return char.toLowerCase();
    }).join('');
  }).reverse().join(' ');
}

console.log(stringTransformer('Example string')); // 'STRING eXAMPLE'
console.log(stringTransformer('  Rxre Bafc   Kwg  ')); // 'kWG bAFC rXRE'