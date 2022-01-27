// algorithm:
//  - create an empty array
//  - slice the string from index 0 to the index number of
//  the (., ! or ?)
//  - push the above sliced substring to array from step 1
//  - the start index for next substring will be the
//  end index of previous substring + 1
//  - do this while str index is less than length of input string

// let longestSentence = str => {
//   let strArr = str.split(' ');
//   console.log(strArr);
//   for (let idx = 0; idx < strArr.length; idx += 1) {
//     if (strArr[idx].includes('.!?'))
//   }
//   // let startIdx = 0;
//   // let endIdx = str.indexOf()
//   // strArr.push(str.slice(startIdx, endIdx));
// };

function longestSentence(str) {
  let sentences = [];
  let startSlice = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    if ('!?.'.includes(str[idx])) {
      sentences.push(str.slice(startSlice, idx + 1).split(' '));
      //console.log(sentences);
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

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

let longText =
'Four score and seven years ago our fathers brought forth on this ' +
'continent a new nation, conceived in liberty, and dedicated to the ' +
'proposition that all men are created equal. Now we are engaged in a ' +
'great civil war, testing whether that nation, or any nation so ' +
'conceived and so dedicated, can long endure. We are met on a great ' +
'battlefield of that war. We have come to dedicate a portion of that ' +
'field, as a final resting place for those who here gave their lives ' +
'that that nation might live. It is altogether fitting and proper that ' +
'we should do this.';

let longerText = longText +
'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
'we can not hallow this ground. The brave men, living and dead, who ' +
'struggled here, have consecrated it, far above our poor power to add ' +
'or detract. The world will little note, nor long remember what we say ' +
'here but it can never forget what they did here. It is for us the ' +
'living, rather, to be dedicated here to the unfinished work which ' +
'they who fought here have thus far so nobly advanced. It is rather ' +
'for us to be here dedicated to the great task remaining before us -- ' +
'that from these honored dead we take increased devotion to that ' +
'cause for which they gave the last full measure of devotion -- that ' +
'we here highly resolve that these dead shall not have died in vain ' +
'-- that this nation, under God, shall have a new birth of freedom -- ' +
'and that government of the people, by the people, for the people, ' +
'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.