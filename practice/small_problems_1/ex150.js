function solution(fullText, searchText) {
  let subStr = [];
  for (let start = 0; start < fullText.length; start += 1) {
    for (let end = start + 1; end <= fullText.length; end += 1) {
      subStr.push(fullText.slice(start, end));
    }
  }
  return subStr.filter(str => str === searchText).length;
}

console.log(solution('aa_bb_cc_dd_bb_e', 'bb')); // # should return 2 since bb shows up twice
console.log(solution('aaabbbcccc', 'bbb')); // # should return 1