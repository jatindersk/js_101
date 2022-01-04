function longestSentence(str) {
  let sentences = [];
  let startSlice = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    if ('!?.'.includes(str[idx])) {
      sentences.push(str.slice(startSlice, idx + 1).split(' '));
     // console.log(sentences);
      startSlice = idx + 2;
    }
  }

  sentences.sort((a, b) => b.length - a.length);
  console.log(sentences[0].join(' '));
  console.log('\n' + `The longest sentence has ${sentences[0].length} words.`);
}

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.