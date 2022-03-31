let cleanUp = str => {
  let result = str.split('').map(char => {
    return char.toLowerCase() === char.toUpperCase() ? ' ' : char;
  });

  let another = [];

  for (let idx = 0; idx < result.length; idx += 1) {
    if (result[idx] === ' ' && another[another.length - 1] === ' ') continue;
    another.push(result[idx]);
  }

  return another.join('');
};

console.log(cleanUp("---what's my +*& line?") === " what s my line ");    // " what s my line "