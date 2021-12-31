let reverseWords = str => {
  let arr = str.split(' ');
  let reverseArr = [];

  arr.forEach(word => {
    reverseArr.push((word.length >= 5) ? word.split('').reverse().join('') : word);
  });

  return reverseArr.join(' ');
};

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"