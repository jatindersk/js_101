// write the function isAnagram
var isAnagram = function(test, original) {
  if (test.length !== original.length) return false;
  test = test.toLowerCase();
  original = original.toLowerCase();
  return test.split('').sort().join('') === original.split('').sort().join('');
};

console.log(isAnagram("foefet", "toffee")); // true, 'The word foefet is an anagram of toffee'
console.log(isAnagram("Buckethead", "DeathCubeK")); // true, 'The word Buckethead is an anagram of DeathCubeK'
console.log(isAnagram("Twoo", "WooT")); // true, 'The word Twoo is an anagram of WooT'
console.log(isAnagram("dumble", "bumble")); // false, 'Characters do not match for test case dumble, bumble'
console.log(isAnagram("ound", "round")); // false, 'Missing characters for test case ound, round'
console.log(isAnagram("apple", "pale")); // false, 'Same letters, but different count'