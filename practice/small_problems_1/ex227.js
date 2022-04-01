let wordSizes = str => {
  let obj = {};

  if (str.length === 0) return obj;

  str.split(' ').forEach(word => {
    let length = word.length;
    obj[length] = obj[length] || 0;
    obj[length] += 1;
  });

  console.log(obj);
};

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}