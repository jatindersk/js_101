let reverseWords = str => {
  str = str.split(' ').map(word => {
    if (word.length > 4) return word.split('').reverse().join('');
    return word;
  });

  return str.join(' ');
};

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"