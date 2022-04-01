let wordSizess = str => {
  let obj = {};

  if (str.length === 0) return obj;

  str.split(' ').forEach(word => {
    let length = word.length;
    obj[length] = obj[length] || 0;
    obj[length] += 1;
  });

  console.log(obj);
};

function wordSizes(str) {
  str = str.split(' ').map(word => {
    return word.split('').filter(char => {
      return char.toLowerCase() !== char.toUpperCase();
    }).join('');
  }).join(' ');

  wordSizess(str);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}