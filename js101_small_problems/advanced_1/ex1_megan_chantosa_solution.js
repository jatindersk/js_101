const template1 = ['The', 'adjective', ' brown', 'noun', 'adverb', 'verb', 
                   ' the', 'adjective', ' yellow', 'noun', ' who', 'adverb', 
                   'verb', ' his', 'noun', ' and looks around.']
console.log(madlibs(template1));
console.log(madlibs(template1));

const template2 = ['The', 'noun', 'verb', ' the', 'noun', "'s", 'noun'];
console.log(madlibs(template2));  
console.log(madlibs(template2));  

function madlibs(arrTemplate) {
  const adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry']
  const nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat']
  const verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats']
  const adverbs = ['easily', 'lazily', 'noisily', 'excitedly']
  arrTemplate = arrTemplate.map(element => {
    if (element === 'noun') {
      return ' "' + nouns[Math.floor(Math.random()*nouns.length)] + '"';
    } 
    if (element === 'verb') {
      return ' "' + verbs[Math.floor(Math.random()*verbs.length)] + '"';
    } 
    if (element === 'adjective') {
      return ' "' + adjectives[Math.floor(Math.random()*adjectives.length)] + '"';
    } 
    if (element === 'adverb') {
      return ' "' + adverbs[Math.floor(Math.random()*adverbs.length)] + '"';
    } else return element;
  })
  return arrTemplate.join('');
}