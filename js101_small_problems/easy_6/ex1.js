let repeater = str => {
  let repeatArr = str.split('').map(letter => letter + letter);
  return repeatArr.join('');
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""