//  - iterate over a1
//  - check wether current word from a1 is a substring of any of the
//    words from a2
//  - iterate over a2 for each substring from a1
//  - find all the substrings of current word from a2
//  - check whether the current substring from a1 is a substring for the
//    present word from a2
//  - if yes, select the current substring from a1
//  - if no, ignore
//  - filter out the duplicate subtstrings from a1
//  - sort the selected words from a1 lexicographically

function inArray(array1, array2) {
  let result = array1.filter(subStr => {
    return array2.some(str => isSubString(str, subStr));
  });

  result = removeDuplicates(result);
  return result.sort();
}

function removeDuplicates(result) {
  let filtered = [];
  result.forEach(word => {
    if (!filtered.includes(word)) filtered.push(word);
  });
  return filtered;
}

function isSubString(str, subStr) {
  let allSubtr = [];
  let currentSub;
  for (let start = 0; start < str.length; start += 1) {
    for (let end = start + 1; end <= str.length; end += 1) {
      currentSub = str.slice(start, end);
      if (currentSub.length !== subStr.length) continue;
      allSubtr.push(currentSub);
    }
  }
  return allSubtr.some(word => word === subStr);
}

let a1 = ['or', 'oes', 'ect'];
let a2 = ['most', 'have', 'ruby-doc.', 'does', 'Ruby', 'apidock', 'In', '(mladen\'s', 'would',
  'should', 'updated', 'not', 'the', 'input', 'the', 'reference', '(since', '1.9?', 'questions'];

console.log(inArray(a1, a2)); // [\'oes\']    :::   '[\'oes\', \'or\']'

// let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// let a1 = ["xyz", "live", "strong"];
// console.log(inArray(a1, a2)); // ["live", "strong"]

// let a1 = ["live", "strong", "arp"];
// console.log(inArray(a1, a2)); // ["arp", "live", "strong"]

// let a1 = ["tarp", "mice", "bull"];
// console.log(inArray(a1, a2)); // []